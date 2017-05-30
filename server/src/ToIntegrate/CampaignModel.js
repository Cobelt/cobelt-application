'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CampaignSchema = new Schema({

    inventionId: {
        type: Schema.Types.ObjectId,
        ref: 'Invention',
        required: true
    }

});

mongoose.model('Campaign', CampaignSchema);