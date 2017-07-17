'use strict';

const Intercom = require('intercom-client');
//const _ = require('lodash');

let _intercomClient; // Singleton (private variable)

const _getIntercomAppId = function () {
    return process.env[`INTERCOM_${process.env.NODE_ENV.toUpperCase()}_APP_TOKEN`];
};

const _getInstance = function () {
    if (!_intercomClient) {
        _intercomClient = new Intercom.Client({token: _getIntercomAppId()});
    }
    return _intercomClient;
};

/*const _getUsers = function () {
    return new Promise(function (resolve, reject) {
        _getInstance().users.list(function (err, users) {
            if (err) reject(err);
            else resolve(users);
        });
    });
};*/

module.exports = {
    getInstance: _getInstance,

    /*sendEmailToUser: function (name, subject, body) {
        if (!name || !subject) return false;

        _getUsers().then(function (data) {
            const user = _.filter(data.body.users, function (o) {
                return o.name === name;
            })[0];

            const message = {
                message_type: "email",
                subject: subject,
                body: body,
                template: "personal", // 'plain'...
                from: {
                    type: "anEmailRandom@domain.ex",
                    id: "862813"
                },
                to: {
                    type: user.type,
                    id: user.id
                }
            };

            Intercom.getInstance().messages.create(message, function (err, data) {
                console.log(data);
            });
        }, function (err) {
            console.log(err);
        });
    }*/
};