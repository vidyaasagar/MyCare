import React, { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'patient' });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call API to register user
        console.log('Registration data:', formData);
    };

    return (
        <div className="register">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <select name="role" value={formData.role} onChange={handleInputChange}>
                    <option value="patient">Patient</option>
                    <option value="provider">Provider</option>
                    <option value="admin">Administrator</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;