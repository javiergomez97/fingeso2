//projectModel.js
var mongoose = require('mongoose');

// Setup schema
var projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    condition: {
        type: Boolean,
        default:true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Project model
var Project = module.exports = mongoose.model('project',
projectSchema);module.exports.get = function (callback, limit) {
    Project.find(callback).limit(limit);
}