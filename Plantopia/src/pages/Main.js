// src/pages/Main.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Main Page</h1>
      <p>Welcome to the main page!</p>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
}

export default Main;