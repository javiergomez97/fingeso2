// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import controllers
var contactController = require('./contactController');
var userController = require('./userController');
var projectController = require('./projectController');
var publicationController = require('./publicationController');
var postulationController = require('./postulationController')
// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

// User routes.
router.route('/users')
    .get(userController.index)
    .post(userController.new);

router.route('/users/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);

// Project routes.
router.route('/projects')
    .get(projectController.index)
    .post(projectController.new);

router.route('/projects/:project_id')
    .get(projectController.view)
    .patch(projectController.update)
    .put(projectController.update)
    .delete(projectController.delete);

// Publication routes.
router.route('/publications')
    .get(publicationController.index)
    .post(publicationController.new);

router.route('/publications/:publication_id')
    .get(publicationController.view)
    .patch(publicationController.update)
    .put(publicationController.update)
    .delete(publicationController.delete);

    // Postulant routes.
router.route('/publication/postulants')
.get(postulationController.index)
.post(postulationController.new);

router.route('/postulants/:postulant_id')
.get(postulationController.view)
.patch(postulationController.update)
.put(postulationController.update)
.delete(postulationController.delete);

// Export API routes
module.exports = router;