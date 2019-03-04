const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const roomController = require('../controllers/roomController');
const secureRoutes = require('../lib/secureRoutes');

// WORK OUT ALL THE ROUTES YOU WILL NEED

router.route('/')
  .get(function(req, res) {
    res.send('Welcome to Express');
  });

router.route(secureRoutes);

// ROOMS
router.route('/rooms')
  .get(roomController.index)
  .post(roomController.create);

router.route('/rooms/:id')
  .get(roomController.show)
  .put(roomController.update)
  .delete(roomController.delete);

// USER
router.route('/users')
  .get(userController.index);

router.route('/users/:id')
  .get(userController.show)
  .put(userController.update);
//.delete(userController.delete);

router.route('/register')
  .post(authController.register);

router.route('/login')
  .post(authController.login);

module.exports = router;
