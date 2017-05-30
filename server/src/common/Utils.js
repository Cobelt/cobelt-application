'use strict';

const _ = require('lodash');

module.exports.isInProduction = _ => process.env['NODE_ENV'] === 'production';