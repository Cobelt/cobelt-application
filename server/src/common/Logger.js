'use strict';

const log4js = require('log4js');

module.exports = class Logger {

    constructor(name) {
        this.logger = log4js.getLogger(name);
    }

    info(message) {
        this.logger.info(message);
    }

    debug(message) {
        this.logger.debug(message);
    }

    warn(message) {
        this.logger.warn(message);
    }

    error(message) {
        this.logger.error(message);
    }
};