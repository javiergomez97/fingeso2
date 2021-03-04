//userModel.js
var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Setup schema
var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

userSchema.plugin(uniqueValidator);

// Export User model
var User = module.exports = mongoose.model('user',userSchema);
module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}