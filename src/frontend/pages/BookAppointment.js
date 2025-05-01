import React, { useState } from 'react';

function BookAppointment() {
    const [appointmentData, setAppointmentData] = useState({ provider: '', date: '' });

    const handleInputChange = (e) => {
        setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call API to book an appointment
        console.log('Appointment data:', appointmentData);
    };

    return (
        <div className="book-appointment">
            <h2>Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="provider"
                    placeholder="Provider ID"
                    value={appointmentData.provider}
                    onChange={handleInputChange}
                />
                <input
                    type="datetime-local"
                    name="date"
                    value={appointmentData.date}
                    onChange={handleInputChange}
                />
                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
}

export default BookAppointment;