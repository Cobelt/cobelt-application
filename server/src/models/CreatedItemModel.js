'use strict';

const mongoose = require('mongoose');
const extend = require('mongoose-schema-extend');
const Schema = mongoose.Schema;

let CreatedItemSchema = new Schema({

    creationDate: {
        type: Date,
        required: true
    },

    lastUpdate: {
        type: Date
    }

});

mongoose.model('ItemCreated', CreatedItemSchema);
module.exports.CreatedItemSchema = CreatedItemSchema;
