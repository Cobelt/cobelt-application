'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let InventionSchema = new Schema({

    name: {
        type: String
    },

    group: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    },

    campaigns: [{
        type: Schema.Types.ObjectId,
        ref: 'Campaign'
    }]

});

mongoose.model('Invention', InventionSchema);
