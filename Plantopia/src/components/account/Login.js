import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/pages/_login.scss';

const Login = () => {
    const navigate = useNavigate();

    // State management for email, password, and "Remember Me"
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleBackClick = () => {
        navigate('/'); // Navigate to the main page
    };

    const handleSignupClick = () => {
        navigate('/Signup'); // Navigate to the signup page
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page

        // Send login data to the API
        fetch('http://localhost:8080/api/Login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.message === 'SUCCESS') {
                    alert('Login successful!');
                    navigate('/dashboard'); // Redirect to dashboard after login
                } else {
                    alert('Invalid email or password. Please try again.');
                }
            })
            .catch((error) => {
                console.error('Error communicating with backend:', error);
                alert('An error occurred. Please try again later.');
            });
    };

    return (
        <div className="login-container container">
            <div className="row align-items-center justify-content-center">
                {/* Left Section */}
                <div className="col-12 col-md-6 text-center login-left">
                    <img src="./icons/login-plant.svg" alt="Plant Pot" className="plant-image" />
                    <h1 className="logo-text">Plantopia</h1>
                </div>

                {/* Right Section */}
                <div className="col-12 col-md-6 login-right">
                    <button className="back-button" onClick={handleBackClick}>← Back</button>
                    <h2>Account Login</h2>
                    <p>If you are already a member, you can login with your email address and password.</p>

                    {/* Login Form */}
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email address"
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

                        <div className="remember-me">
                            <input
                                type="checkbox"
                                id="remember"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label htmlFor="remember">Remember me</label>
                        </div>

                        <button type="submit" className="login-button">Login</button>
                    </form>

                    <p className="signup-link">
                        Don’t have an account?{' '}
                        <a onClick={handleSignupClick} href="/Signup">
                            Sign up here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
