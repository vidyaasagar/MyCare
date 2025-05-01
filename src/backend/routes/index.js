const express = require('express');
const userRoutes = require('./userRoutes');

const router = express.Router();

// Define modular routes
router.use('/users', userRoutes);

module.exports = router;