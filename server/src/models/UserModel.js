'use strict';

const passportLocalMongoose = require('passport-local-mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonModel = require('./PersonModel');
const PersonSchema = PersonModel.PersonSchema;

let UserSchema = PersonSchema.extend({

    /*** Account Settings ***/
    avatarFile: {
        type: String,
        default: 'undefinedAvatar.png' // it's an example
    },
    /*
    safetyCode: {
        type: Number,
        select: false
    }

    salt: { // Password (1/2)
        type: String,
        select: false
    },

    hash: { // Password (2/2)
        type: String,
        select: false
    },
    */
    attempts: {
        type: Number,
        default: 0
    },

    /*** More Informations ***/
    minibio: {
        type: String
    },

    address: {
        country: {
            type: String
        },
        city: {
            type: String
        }
    },

    birth: {
        date: {
            type: Date
        },
        place: {
            type: String
        }
    },

    technologies: [{ // the technologies he use, examples : Docker, TypeScript, 3D Printer, VR,...
       type: String
    }],

    experience: {
        type: String
    },

    /*** Inventions ***/
    invention: [{
        type: Schema.ObjectId,
        ref: 'Inventions'
    }]

});

/**
 * User Authentication
 */
UserSchema.plugin(passportLocalMongoose, {
    usernameField: "email",
    usernameUnique: true,
    lastLoginField: "lastLogin",
    selectFields: [
        "attempts", // "attempts" is required for limitation
        "email"
    ],
    usernameLowerCase: true,
    encoding: 'hex',
    limitAttempts: true,
    maxAttempts: 5,
    passwordValidator: function (password, callback) {
        if (password.length < 5) {
            return callback({
                status: 400,
                message: "Password should have at least 5 characters"
            });
        }
        callback(null);
    }
});


mongoose.model('User', UserSchema);
