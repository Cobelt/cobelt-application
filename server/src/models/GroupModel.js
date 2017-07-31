'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GroupSchema = new Schema({

    name: {
        type: String,
        default: 'My invention group'
    },

    users: [{
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        permissions : {
            type: Number,
            default: 0
        }
    }]

});

mongoose.model('Group', GroupSchema);
