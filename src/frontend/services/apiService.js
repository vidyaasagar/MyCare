const BASE_URL = 'http://localhost:4000/api';

export const login = async (email, password) => {
    const response = await fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    return response.json();
};

export const fetchUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`);
    return response.json();
};