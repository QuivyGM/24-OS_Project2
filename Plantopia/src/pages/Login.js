// src/pages/Login.js

import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", username, password);
    // Login mantiqiy qismini yozish kerak bo‘lsa, shu yerda qo‘shishingiz mumkin
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
            <div>
                <label>Username: </label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password: </label>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;