// publicationController.js
// Import publication model
Publication = require('./publicationModel');
// Handle index actions
exports.index = function (req, res) {
    Publication.get(function (err, publications) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Publications retrieved successfully",
            data: publications
        });
    });
};
// Handle create publication actions
exports.new = function (req, res) {
    var publication = new Publication();
    publication.name = req.body.name ? req.body.name : publication.name;
    publication.owner = req.body.owner ? req.body.owner : publication.owner;
    publication.description = req.body.description ? req.body.description : publication.description;
    publication.requires = req.body.requires;
    publication.ubication = req.body.ubication;
    publication.salary = req.body.salary;
    publication.fin_date = req.body.fin_date;
    // save the publication and check for errors
    publication.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New publication created!',
            data: publication
        });
    });
};
// Handle view publication info
exports.view = function (req, res) {
    Publication.findById(req.params.publication_id, function (err, publication) {
        if (err)
            res.send(err);
        res.json({
            message: 'Publication details loading..',
            data: publication
        });
    });
};
// Handle update publication info
exports.update = function (req, res) {Publication.findById(req.params.publication_id,
function (err, publication) {
    if (err)
        res.send(err);
    publication.name = req.body.name ? req.body.name : publication.name;
    publication.description = req.body.description ? req.body.description : publication.description;
    publication.owner = req.body.owner ? req.body.owner : publication.owner;
    publication.requires = req.body.requires;
    publication.ubication = req.body.ubication;
    publication.salary = req.body.salary;
    publication.fin_date = req.body.fin_date;
    publication.condition = req.body.condition;
    // save the publication and check for errors
    publication.save(function (err) {
    if (err)
        res.json(err);
    res.json({
        message: 'Publication Info updated',
        data: publication
    });
});
});
};
// Handle delete publication
exports.delete = function (req, res) {
    Publication.remove({
      _id: req.params.publication_id
    }, function (err, publication) {
        if (err)
res.send(err);
res.json({
status: "success",
message: 'Publication deleted'
});
});
};