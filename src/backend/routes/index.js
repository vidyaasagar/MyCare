const express = require('express');
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const appointmentRoutes = require('./appointmentRoutes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/appointments', appointmentRoutes);

module.exports = router;