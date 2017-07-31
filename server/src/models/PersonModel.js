'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const extend = require('mongoose-schema-extend');

const CreatedItemModel = require('./CreatedItemModel');
const CreatedItemSchema = CreatedItemModel.CreatedItemSchema;

let PersonSchema = CreatedItemSchema.extend ({

    /*** Infos about the person ***/
        // Personnal side
    firstname: {
        type: String,
        default: 'John'
    },

    lastname: {
        type: String,
        default: 'Doe'
    },

    emailInfos: {
        email: {
            type: String,
            required: true,
            index: true,
            unique: true
        },
        confirmed: {
            type: Boolean,
            default: false
        },
        tokenEmail: {
            type: String,
            required: true
        }
    },

    phone: {
        type: String // pour les "->0<-6..."
    },

    lang: {
        type: String,
        required: true,
        default: 'en'
    },

    socialId: {
        type: Schema.ObjectId,
        ref: 'Social'
    },

    lastConnexion: {
        type: Date
    },

    ip: {
        type: String
    },

        // Professional Side
    url: {
        type: String
    },

    activity: {
        salaried: {
            type: Boolean,
            required: true,
            default: false
        },
        job: {
            type: String
        },
        revenue: {
            type: Number
        },
        division: {
            type: String
        },
        function: {
            type: String
        },
        description: {
            type: String
        },
        company: {
            name: {
                type: String
            },
            type: {
                type: String
            },
            sector: {
                type: String
            },
            size: {
                type: String
            }
        },

    },

    /*** His or her answers ***/
    answers: [{
        type: Schema.ObjectId,
        ref: 'Answer'
    }]

});

mongoose.model('Person', PersonSchema);
module.exports.PersonSchema = PersonSchema;