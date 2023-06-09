const mongoose = require('mongoose')

const Schema = mongoose.Schema


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    lastname: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    savedPlaces:[{
        type: mongoose.Types.ObjectId,
        ref: 'Place'
    }]
})

const User = mongoose.model('User', userSchema)

module.exports = User