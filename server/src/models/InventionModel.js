'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Settings = mongoose.model('InventionSettings');
const User = mongoose.model('User');
const _ = require('lodash');

const CreatedItemModel = require('./CreatedItemModel');
const CreatedItemSchema = CreatedItemModel.CreatedItemSchema;

let InventionSchema = CreatedItemSchema.extend({

    group: {
        type: Schema.ObjectId,
        ref: 'Group'
    },

    /* inventionCards: [InventionCard], */

    campaigns: [{
        type: Schema.ObjectId,
        ref: 'Campaign'
    }],

    quiz: {
        type: Schema.ObjectId,
        ref: 'Quiz'
    },

    /* settings: [InventionSettings], */

    status: { // attention : Validated vient d'être ajouté
        type: String,
        enum: ['CREATED', 'EDITING', 'SUBMITTED', 'VALIDATED', 'EVALUATING', 'EVALUATING_DONE'],
        default: 'EDITING'
    },

    isPublic: {
        type: Boolean,
        default: false
    }
});

mongoose.model('Invention', InventionSchema);
