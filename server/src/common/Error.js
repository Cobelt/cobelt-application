'use strict';

const fs = require("fs");
const path = require('path');
const locale = require("locale");
const _ = require('lodash');

const _errCodes = {
    "fr_FR": JSON.parse(fs.readFileSync(path.join(__dirname, '../i18n/ErrorCodes.fr_FR.json'), 'utf8')),
    "en_US": JSON.parse(fs.readFileSync(path.join(__dirname, '../i18n/ErrorCodes.en_US.json'), 'utf8'))
};

const _getErrorTranslation = function (errCode, lang) {
    if (!errCode) errCode = 'UNDEFINED';
    if (!lang) return errCode;
    return _errCodes[lang][errCode];
};

module.exports = {
    newError: (message, status, options, lang) => {
        let error = {
            status: status || 500,
            message: /^[A-Z\_]+$/.exec(message) !== null ? _getErrorTranslation(message, lang) : message
        };

        if (options && typeof options === 'object') {
            _.extend(error, _.omit(options, ['message', 'status']));
        }

        return error;
    }
};