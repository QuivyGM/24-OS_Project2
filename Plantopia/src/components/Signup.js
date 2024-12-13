// src/pages/Signup.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/_signup.scss';

const Signup = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/'); // Navigate to the main page
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
                    <form className="signup-form">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" placeholder="Full Name" />

                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="Email Address" />

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password" />

                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" />

                        <button type="submit" className="signup-button">Sign Up</button>
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