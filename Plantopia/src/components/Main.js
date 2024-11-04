// src/pages/Main.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/_main.scss';


const Main = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="main-page">
      <h1>Welcome to Plantopia</h1>
      <p>This is the main page of your application.</p>
      <button onClick={handleLoginClick} className="login-button">
        Login
      </button>
    </div>
  );
};

export default Main;