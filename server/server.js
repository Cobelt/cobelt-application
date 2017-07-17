/**
 * Cobelt API v1
 * Created on June 2017
 */

'use strict';

require('./src/models/_index'); // Loading models in Mongoose

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const locale = require("locale");
const session = require('express-session');
const mongoStore = require('connect-mongo')({session: session});
const favicon = require('serve-favicon');
const mongooseCache = require('mongoose-cache');
const rfs = require('rotating-file-stream');
const cors = require('cors');
const dotenv = require('dotenv');
const Utils = require('./src/common/Utils');
const passport = require('passport');
const Intercom = require('./src/common/Intercom');
const Authentication = require('./src/common/Authentication');
const Error = require('./src/common/Error');
const Logger = require('./src/common/Logger');
const FingerPrint = require('express-fingerprint');

const log = new Logger('server');

dotenv.config({path: './.env', silent: true});
dotenv.load();

/**
 * Configuration
 */
const port = process.env.PORT || 3001;
const sessionMaxAge = parseInt(process.env.SESSION_MAX_AGE) || 172800000; // 60000 = 1 minute
process.env.SESSION_MAX_AGE = sessionMaxAge; // Pour être sûr qu'il y ait une valeur
const mongoDBAddress = process.env.MONGODB_URL || 'mongodb:27017';
const mongoDBName = process.env.MONGODB_NAME || 'cobelt_db';
const mongoDBCachingMaxAgeInMinutes = parseInt(process.env.MONGODB_MAX_CACHING_TIME_IN_MINUTES) || 0;
const sessionSecretKey = process.env.SESSION_SECRET_KEY;
if (!sessionSecretKey) {
    log.error("Environment variable SESSION_SECRET_KEY is not defined.");
    process.exit(1);
}
const supportedLanguages = new locale.Locales(["en_US", "fr_FR"]);

const originsWhitelist = [
    'http://localhost:4200'
];

const accessLogStream = rfs('access.log.txt', {
    interval: '1d',     // rotate daily
    size: '10M',        // rotate every 10 MegaBytes written
    compress: 'gzip',   // compress rotated files
    path: './logs'
});

const app = express();

const mongoDbUrl = `mongodb://${mongoDBAddress}/${mongoDBName}`;
const db = mongoose.connect(mongoDbUrl);
mongoose.connection.on('error', log.error.bind(log, 'MongoDB connection error:'));
mongoose.connection.once('open', function () {
    const sessionConfig = {
        secret: sessionSecretKey,
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: sessionMaxAge // 60000 = 1 minute
        },
        store: new mongoStore({
            db: db.connection.db,
            collection: 'sessions'
        })
    };

    if (app.get('env') === 'production') {
        app.set('trust proxy', 1);
        sessionConfig.cookie.secure = true;
    }

    app.use(helmet());
    app.use(compress());
    app.use(bodyParser.json({
        limit: '15mb'
    }));
    app.use(bodyParser.urlencoded({
        limit: '15mb',
        extended: true
    }));
    app.use(morgan('combined', {
        stream: accessLogStream
    }));
    app.use(locale(supportedLanguages));
    app.use(favicon('./public/icon.ico'));
    app.use(session(sessionConfig));

    app.options('*', function(req, res, next) { // FIXME Supprime les sessions créées par les requêtes OPTIONS des clients pour le CORS (évite les sessions inutiles). Trouver une autre méthode ?
        req.session.destroy();
        next();
    });

    app.use(FingerPrint({
        parameters:[
            FingerPrint.useragent,
            FingerPrint.acceptHeaders,
            FingerPrint.geoip,
        ]
    }));

    app.use(cors({
        origin: function (origin, callback) {
            if (originsWhitelist.indexOf(origin) !== -1 || app.get('env') === 'development') {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true
    }));

    Authentication.initializePassportAuthentication(app);

    app.use('*', (req, res, next) => { // TODO Intercom : Inscrire dans Lead/User/Visitor si besoin
        log.info(`[${req.user ? 'User' : 'Lead/Visitor'}] Language: ${req.locale}, Session: "${req.sessionID}", FingerPrint: "${req.fingerprint.hash}"`);

        const newVisit = {
            date: new Date(),
            page: req.baseUrl
        };

        req.session.fingerprint = req.fingerprint;
        req.session.typeVisitor = req.user ? 'User' : 'Lead/Visitor';
        req.session.lang = req.locale;

        if (req.session.visited)
            req.session.visited.push(newVisit);
        else
            req.session.visited = [newVisit];

        next();
    });

    /**
     * Routes
     */
    app.use('/api', require('./src/routes/ApiRoutes.js'));
    app.use(express.static('./public'));


    /**
     * Error 404
     */
    app.use(function (req, res, next) {
        next(Error.newError(`Cannot ${req.method} ${req.url}`, 404));
    });

    /**
     * Middlewares errors handling
     */
    app.use(function (err, req, res, next) {
        const status = err.status || 500;
        res.status(status);

        err = Error.newError(err.message, status, {
                "method": req.method,
                "url": req.url,
                "body": req.body,
                "user-agent": req.headers['user-agent'],
                "remote": req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                "err": err
            }, req.locale);

        log.error(err);

        res.format({
            'text/plain': function () {
                res.send(err.message);
            },

            'text/html': function () {
                res.send(`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Error ${status}</title></head><body><pre>${err.message}</pre></body></html>`);
            },

            'application/json': function () {
                res.send({"message": err.message});
            },

            'default': function () {
                res.sendStatus(406);
            }
        });
    });

    app.listen(port, function () {
        log.info(`Listening on port ${port}.`);
        log.info(`Environnement : ${app.get('env')}`);
        log.info(`Database URL : ${mongoDbUrl}`);
        log.info(`MongoDB caching duration : ${mongoDBCachingMaxAgeInMinutes} minutes`);
        log.info(`Sessions are stored for ${ (sessionMaxAge/60000)>60 ? `${sessionMaxAge/60000/60} hours` : `${sessionMaxAge/60000} minutes`}`);
        if (app.get('env') !== 'development') {
            log.info(`Whitelisted client domains for CORS : ${originsWhitelist.join(', ')}`);
        }
    });

    mongooseCache.install(mongoose, {
        max: 50,
        maxAge: mongoDBCachingMaxAgeInMinutes * 1000 * 60
    });
});