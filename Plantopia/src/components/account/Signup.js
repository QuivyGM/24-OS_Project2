import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/pages/_signup.scss';

const Signup = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleBackClick = () => {
        navigate('/'); // Navigate to the main page
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from reloading the page

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Send data to the backend API
        fetch('http://localhost:8080/api/SignUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.message === 'SUCCESS') {
                    alert('Account created successfully!');
                    navigate('/login'); // Redirect to login page
                } else {
                    alert('Sign-up failed. Please try again.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            });
    };

    return (
        <div className="signup-container container">
            <div className="row align-items-center justify-content-center">
                {/* Left Section */}
                <div className="col-12 col-md-6 text-center signup-left">
                    <img src="./icons/signup-plant.svg" alt="Plant Pot" className="plant-image" />
                    <h1 className="logo-text">Plantopia</h1>
                </div>

                {/* Right Section */}
                <div className="col-12 col-md-6 signup-right">
                    <button className="back-button" onClick={handleBackClick}>← Back</button>
                    <h2>Create Account</h2>
                    <p>Sign up to join the Plantopia community and start your journey.</p>
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />

                        <button type="submit" className="signup-button">
                            Sign Up
                        </button>
                    </form>
                    <p className="login-link">
                        Already have an account? <a href="/login">Log in here</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
