'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonModel = require('./PersonModel');
const PersonSchema = PersonModel.PersonSchema;

let ProfessionalSchema = PersonSchema.extend({

    /*** Stats ***/
    emailConfidence: {
        type: Number,
        default: 0
    },

    mailStats: {
        state: {
            type: String,
            default: ''
        },
        clicks: {
            type: Number,
            default: 0
        },
        opens: {
            type: Number,
            default: 0
        },
        template: {
            type: String,
            default: ''
        },
        error: {
            type: String,
            default: ''
        }
    },


    keywords: {
        type: String,
        default: ''
    },


    info: {
        referrer: {
            type: String,
            default: ''
        },
        agent: {
            type: String,
            default: ''
        }
    }

});


mongoose.model('Professional', ProfessionalSchema);
