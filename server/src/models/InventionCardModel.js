'use strict';

/**
 * Module dependencies.
 */
const validator = require('express-validator').validator;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Patent = require('./PatentModel');
const Media = require('./MediaModel');
const CreatedItemModel = require('./CreatedItemModel');
const CreatedItemSchema = CreatedItemModel.CreatedItemSchema;


const InventionCardSchema = CreatedItemSchema.extend({

        lang: {
            type: String,
            enum: ['en', 'fr'],
            default: 'en'
        },

        progress: {
            type: Number,
            default: 0
        },

        comment: {
            type: String,
            default: ''
        },

        patents: [{
            type: Schema.ObjectId,
            ref: 'Patent'
        }],

        medias: [{
            type: Schema.ObjectId,
            ref: 'Media'
        }],

        pitch: {
            title: {
                type: String,
                trim: true,
                default: '', // Pour activer la validation
                validate: [requiredEmbedded, 'INVENTION.MESSAGES.ERROR.PITCH.TITLE']
            },

            summary: {
                type: String,
                default: '', // Pour activer la validation
                validate: [requiredEmbedded, 'INVENTION.MESSAGES.ERROR.PITCH.SUMMARY']
            },

            problem: {
                type: String,
                default: '', // Pour activer la validation
                validate: [requiredEmbedded, 'INVENTION.MESSAGES.ERROR.PITCH.PROBLEM']
            },

            solution: {
                type: String,
                default: '', // Pour activer la validation
                validate: [requiredEmbedded, 'INVENTION.MESSAGES.ERROR.PITCH.SOLUTION']
            },

            country: {
                type: Schema.Types.Mixed,
                default: {}, // Pour activer la validation
                validate: [requiredEmbedded, 'INVENTION.MESSAGES.ERROR.PITCH.COUNTRY']
            }
        },

        technical: {
            projectStatus: {
                type: Number,
                default: 0
            },

            techDocuments: [{
                type: Schema.ObjectId,
                ref: 'Document'
            }]
        },

        business: {
            marketSector: {
                type: Schema.Types.Mixed,
                default: {}, // Pour activer la validation
                validate: [requiredEmbedded, 'INVENTION.MESSAGES.ERROR.BUSINESS.MARKET_SECTOR']
            },

            marketPosition: {
                type: [Schema.Types.Mixed]
            },

            timeToMarket: {
                type: Number,
                default: 0
            }
        }
    }
);

mongoose.model('InventionCard', InventionCardSchema);

module.exports = InventionCardSchema;
