// src/pages/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/pages/_login.scss';

const Login = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/'); // Navigate to the main page
    };

    const handleSignupClick = () => {
        navigate('/Signup'); // Navigate to the signup page
    };

    return (
        <div className="login-container container">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 col-md-6 text-center login-left">
                    <img src="./icons/login-plant.svg" alt="Plant Pot" className="plant-image" /> {/* Replace with actual image path */}
                    <h1 className="logo-text">Plantopia</h1>
                </div>
                <div className="col-12 col-md-6 login-right">
                    <button className="back-button" onClick={handleBackClick}>← Back</button>
                    <h2>Account Login</h2>
                    <p>If you are already a member you can login with your email address and password.</p>
                    <form className="login-form">
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" name="email" placeholder="Email address" />

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password" />

                        <div className="remember-me">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>

                        <button type="submit" className="login-button">Register Account</button>
                    </form>
                    <p className="signup-link">
                        Don’t have an account? <a onClick={handleSignupClick} href="/Signup">Sign up here</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
