'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CreatedItemModel = require('./CreatedItemModel');
const CreatedItemSchema = CreatedItemModel.CreatedItemSchema;

let QuizSchema = CreatedItemSchema.extend({

    questions: [{
        type: Schema.ObjectId,
        ref: 'Question'
    }]
});


mongoose.model('Quiz', QuizSchema);
