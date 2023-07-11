const mongoose = require('mongoose')

const regitrationSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },

    lName: {
        type: String,
        required: true
    },

    contact: {
        type: Number,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,


    }
})

module.exports = mongoose.model('register', regitrationSchema)