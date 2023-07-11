const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: Number,

    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },

    mobile_no: {
        type: Number,
        required: true,
        unique: true

    }
})

module.exports = mongoose.model('employee', empSchema)