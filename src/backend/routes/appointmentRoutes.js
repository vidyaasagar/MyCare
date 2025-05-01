const express = require('express');
const appointmentController = require('../controllers/appointmentController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Appointment routes
router.post('/', authMiddleware.authenticate, appointmentController.createAppointment);
router.get('/', authMiddleware.authenticate, appointmentController.getAppointments);

module.exports = router;