// projectController.js
// Import project model
Project = require('./projectModel');
// Handle index actions
exports.index = function (req, res) {
    Project.get(function (err, projects) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Projects retrieved successfully",
            data: projects
        });
    });
};
// Handle create project actions
exports.new = function (req, res) {
    var project = new Project();
    project.name = req.body.name ? req.body.name : proyect.name;
    project.owner = req.body.owner ? req.body.owner : project.owner;
    project.area = req.body.area;
    project.description = req.body.description;
    // save the project and check for errors
    project.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New project created!',
            data: project
        });
    });
};
// Handle view project info
exports.view = function (req, res) {
    Project.findById(req.params.project_id, function (err, project) {
        if (err)
            res.send(err);
        res.json({
            message: 'Project details loading..',
            data: project
        });
    });
};
// Handle update project info
exports.update = function (req, res) {Project.findById(req.params.project_id,
function (err, project) {
    if (err)
        res.send(err);
    project.name = req.body.name ? req.body.name : proyect.name;
    project.owner = req.body.owner ? req.body.owner : project.owner;
    project.area = req.body.area;
    project.description = req.body.description;
    // save the project and check for errors
    project.save(function (err) {
    if (err)
        res.json(err);
    res.json({
        message: 'Project Info updated',
        data: project
    });
});
});
};
// Handle delete project
exports.delete = function (req, res) {
    Project.remove({
      _id: req.params.project_id
    }, function (err, project) {
        if (err)
res.send(err);
res.json({
status: "success",
message: 'Project deleted'
});
});
};