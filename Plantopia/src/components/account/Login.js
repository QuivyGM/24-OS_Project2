// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/pages/_login.scss';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleBackClick = () => {
        navigate('/'); // Navigate to the main page
    };

    const handleSignupClick = () => {
        navigate('/Signup'); // Navigate to the signup page
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        fetch('로그인 API주소', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                pw: password,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.message === 'SUCCESS') {
                    alert('로그인 성공!');
                    navigate('/'); // Navigate to the main page on success
                } else {
                    alert('이메일 또는 비밀번호가 잘못되었습니다.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('로그인 중 문제가 발생했습니다. 다시 시도해 주세요.');
            });
    };

    return (
        <div className="login-container container">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 col-md-6 text-center login-left">
                    <img
                        src="./icons/login-plant.svg"
                        alt="Plant Pot"
                        className="plant-image"
                    />
                    <h1 className="logo-text">Plantopia</h1>
                </div>
                <div className="col-12 col-md-6 login-right">
                    <button className="back-button" onClick={handleBackClick}>
                        ← Back
                    </button>
                    <h2>Account Login</h2>
                    <p>
                        If you are already a member you can login with your email
                        address and password.
                    </p>
                    <form className="login-form" onSubmit={handleLoginSubmit}>
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <div className="remember-me">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>

                        <button type="submit" className="login-button">
                            Register Account
                        </button>
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
