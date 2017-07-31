'use strict';

const passport = require('passport');
const Error = require('../common/Error');

class UserController {

    static login(req, res, next) {
        passport.authenticate('local', function (err, user, info) {
            if (err) {
                return next(err);
            }

            if (!user) { // authentication failed
                return next(Error.newError(info.message, 403, info));
            }

            req.login(user, err => {
                if (err) next(err);
                else {
                    req.session.typeVisitor = 'User';
                    req.session.userId = user.id;
                    res.send({
                        isAuthenticated: req.isAuthenticated(),
                        isAdmin: true, // TODO
                        message: "You have been successfully logged in."
                    });
                }
            });
        })(req, res, next);
    }

    static logout(req, res, next) {
        req.logout();
        req.session.destroy(function (err) {
            if (err) { return next(err); }
            const isAuthenticated = req.isAuthenticated();
            if (isAuthenticated) {
                return next(Error.newError(null, 500, {isAuthenticated: isAuthenticated}));
            }
            res.clearCookie('connect.sid');
            res.send({
                isAuthenticated: isAuthenticated,
                isAdmin: false, // TODO, même si ça devrait toujours retourner false ici.
                message: "You have been successfully logged out."
            });
        });
    }

    static getSessionInfos(req, res, next) {
        res.send({
            message: req.session ? "Session already open" : "Session opened",
            isAuthenticated: !!req.user,
            isAdmin: true // TODO
        });
    }
}

module.exports = UserController;
