'use strict';

const passport = require('passport');

const mongoose = require('mongoose');
const User = mongoose.model('User');
const Error = require('./Error');

module.exports.initializePassportAuthentication = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(User.createStrategy());
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
};

module.exports.isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
        return next();
    next(Error.newError("FORBIDDEN", 403));
};