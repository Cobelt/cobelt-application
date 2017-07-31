'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let InfographicSchema = new Schema({

    title: {
        type: String
    },

    worldMAp: [{
        country: {
            type: String
        },
        notation: {
            type: String
        },
        professionalsCount: {
            type: Number
        }
    }],

    invention: {
        type: Schema.ObjectId,
        ref: 'Invention'
    }

});


mongoose.model('Infographic', InfographicSchema);
