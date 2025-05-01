const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Define user-related routes
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

module.exports = router;