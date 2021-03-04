//publicationModel.js
var mongoose = require('mongoose');

// Setup schema
var publicationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requires: {
        type: String,
        required: true
    },
    ubication: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    init_date: {
        type: Date,
        default: Date.now
    },
    fin_date: {
        type: Date,
        required: true
    },
    condition: {
        type: Boolean,
        default: true
    }
});
// Export publication model
var Publication = module.exports = mongoose.model('publication',
publicationSchema);module.exports.get = function (callback, limit) {
    Publication.find(callback).limit(limit);
}