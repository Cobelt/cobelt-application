'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FacadeSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        default: 0
    },

    inventionsIds: [{
        type: Schema.Types.ObjectId,
        ref: 'Invention'
    }],

    employees: [{
        type: Schema.Types.ObjectId,
        ref: 'Group'
    }]

});

mongoose.model('Facade', FacadeSchema);