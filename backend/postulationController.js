// postulationController.js
// Import postulation model
Postulation = require('./postulationModel');
// Handle index actions
exports.index = function (req, res) {
    Postulation.get(function (err, postulations) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Postulations retrieved successfully",
            data: postulations
        });
    });
};
// Handle create postulation actions
exports.new = function (req, res) {
    var postulation = new Postulation();
    postulation.id_publication = req.body.id_publication ? req.body.id_publication : postulation.id_publication;
    postulation.id_postulant = req.body.id_postulant ? req.body.id_postulant : postulation.id_postulant;
    // save the postulation and check for errors
    postulation.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New postulation created!',
            data: postulation
        });
    });
};
// Handle view postulation info
exports.view = function (req, res) {
    Postulation.findById(req.params.postulation_id, function (err, postulation) {
        if (err)
            res.send(err);
        res.json({
            message: 'Postulation details loading..',
            data: postulation
        });
    });
};
// Handle update postulation info
exports.update = function (req, res) {Postulation.findById(req.params.postulation_id,
function (err, postulation) {
    if (err)
        res.send(err);
    postulation.id_publication = req.body.id_publication ? req.body.id_publication : postulation.id_publication;
    postulation.id_postulant = req.body.id_postulant ? req.body.id_postulant : postulation.id_postulant;
    // save the postulation and check for errors
    postulation.save(function (err) {
    if (err)
        res.json(err);
    res.json({
        message: 'Postulation Info updated',
        data: postulation
    });
});
});
};
// Handle delete postulation
exports.delete = function (req, res) {
    Postulation.remove({
      _id: req.params.postulation_id
    }, function (err, postulation) {
        if (err)
res.send(err);
res.json({
status: "success",
message: 'Postulation deleted'
});
});
};