//postulationModel.js
var mongoose = require('mongoose');

// Setup schema
var postulationSchema = mongoose.Schema({
    id_publication: {
        type: String,
        required: true
    },
    id_postulant: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    condition: {
        type: Boolean,
        default: true
    }
});
// Export Postulation model
var Postulation = module.exports = mongoose.model('postulation',
postulationSchema);module.exports.get = function (callback, limit) {
    Postulation.find(callback).limit(limit);
}