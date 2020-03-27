const mongoose = require('mongoose');

const  Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        trim: true,
    },
    notes: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
        trim: true,
    },
    height: {
        type: Number,
        required: true,
        trim: true,
    },
    weight: {
        type: Number,
        required: true,
        trim: true,
    },
    bodytemperature: {
        type: Number,
        required: true,
        trim: true,
    },
    pulserate: {
        type: Number,
        required: true,
        trim: true,
    },
    bp: {
        type: Number,
        required: true,
        trim: true,
    },
    medications: {
        type: String,
        required: true,
        trim: true,
    }
},{
  timestamp:true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;