'use strict';

const mongoose = require('mongoose');
const Error = require("../common/Error");
const User = mongoose.model('User');

class UserController {

    /**
     * User Signin / Sign in
     */
    static create (req, res, next) {
        const userFormData = req.body;

        if (userFormData && userFormData.email && userFormData.password) {
            // TODO dates creation / update
            const newUser = new User(userFormData);

            User.register(newUser, userFormData.password, function(err, newRegistredUser) {
                if (err) return next(err);
                // TODO envoyer email de confirmation d'inscription

                req.body = userFormData;

                res.send({

                });
            });
        }
        else {
            next(Error.newError("MISSING_DATA", 400));
        }
    }


    static get (req, res, next) {
        if(req.session.userId) {
            User.findOne({"_id": req.userId}, (err, user) => {
                req.user = user;
                next(err)
            });
        }
        else {
            next(Error.newError('NO_USER_SPECIFIED', 400));
        }
    }

    static send (req, res) {
        res.send(req.user);
    }

    /*
    static getByEmail (req, res, next) {
        if(req.userEmail) {
            req.invention = invention.findOne({"email": //providerUserProfile.email});
            delete req.userEmail;
        }
        return next();
    }
    */

    /*static load (req, res, next, id) {
        User.findOne ({ '_id': id}).exec((err, user) => {
            if (err) {
                return next(err);
            }
            else {
                req.user = user;
                return next();
            }
        });
    }

    static loadAll (req, res, next) {
        User.find().exec((err, users) => {
            if (err) {
                return next(err);
            }
            else {
                req.user = users;
                return next();
            }
        });
    }


    static show (req, res) {
        res.send("User: {\n" +
            "   _id: '"+req.user.id+"'\n" +
            "}");
    }


    static showAll (req, res) {
        let flow = "Users: [<br>";
        for (let i = 0; i < req.user.length; i++) {
            flow += "{  _id: '" + req.user[i].id + "'}<br>";
        }
        flow += "]";
        res.send(flow);
    }*/

}

module.exports = UserController;
