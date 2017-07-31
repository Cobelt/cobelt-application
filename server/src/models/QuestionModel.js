'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuestionSchema = new Schema({

    question: { // la question elle-même
        type: String,
        required: true
    },

    reducedTitle: { // the title for infographic/quiz sections
        type: String,
        required: true
    },

    answerType: { // type de réponse attendu parmis : "bool", "string", "number"
        type: String,
        default: "string"
    },

    priorityOrder: { // order in quiz or infographic, sinon on peut s'en passer en déplacant la question dans le tableau de questions
        type: Number,
        default: 0
    },

    isOn: { // active or not active the rendering in quiz and infographic
        type: Boolean,
        default: true
    }

});


mongoose.model('Question', QuestionSchema);
