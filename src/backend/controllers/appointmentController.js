const Appointment = require('../models/appointmentModel');

// Create a new appointment
exports.createAppointment = async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        const savedAppointment = await appointment.save();
        res.status(201).json(savedAppointment);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create appointment' });
    }
};

// Get all appointments for a user
exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({ patient: req.user.id }).populate('provider', 'name');
        res.status(200).json(appointments);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch appointments' });
    }
};