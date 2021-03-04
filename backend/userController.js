// userController.js
// Import user model
User = require('./userModel');
// Handle index actions
exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: users
        });
    });
};
// Handle create user actions
exports.new = function (req, res) {
    var user = new User();
    user.name = req.body.name ? req.body.name : user.name;
    user.last_name = req.body.last_name ? req.body.last_name : user.last_name;
    user.username = req.body.username ? req.body.username : user.username;
    user.rol = req.body.rol;
    user.password = req.body.password;
    user.email = req.body.email;
    user.phone = req.body.phone;
    // save the user and check for errors
    user.save(function (err) {
        if (err)
            res.json({
                success:false,
                message: 'El Nombre de Usuario o el Correo ingresado ya está en uso, intente con otro'
            });
        res.json({
            message: 'New user created!',
            data: user
        });
    });
};
// Handle view user info
exports.view = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: user
        });
    });
};
// Handle update user info
exports.update = function (req, res) {User.findById(req.params.user_id,
function (err, user) {
    if (err)
        res.send(err);
    user.name = req.body.name ? req.body.name : user.name;
    user.last_name = req.body.last_name ? req.body.last_name : user.last_name;
    user.username = req.body.username ? req.body.username : user.username;
    user.rol = req.body.rol;
    user.password = req.body.password;
    user.email = req.body.email;
    user.phone = req.body.phone;
    // save the user and check for errors
    user.save(function (err) {
    if (err)
        res.json(err);
    res.json({
        message: 'User Info updated',
        data: user
    });
});
});
};
// Handle delete user
exports.delete = function (req, res) {
    User.remove({
      _id: req.params.user_id
    }, function (err, user) {
        if (err)
res.send(err);
res.json({
status: "success",
message: 'User deleted'
});
});
};