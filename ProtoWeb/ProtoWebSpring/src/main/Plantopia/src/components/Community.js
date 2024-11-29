// src/components/Service.js

import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/_community.scss';
const Community = () => {
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const [showInput, setShowInput] = useState(false);

// Function to handle logo click and navigate to the main page
const handleLogoClick = (event) => {
  event.preventDefault();
  navigate('/');
};

// Function to handle login button click and navigate to the login page
const handleLoginClick = () => {
  navigate('/login');
};

// Function to handle shop button click and navigate to the shop page
const handleShopClick = () => {
  navigate('/shop');
};

// Function to show the search input when the search button is clicked
const handleSearchClick = () => {
  setShowInput(true);
  if (searchInputRef.current) {
      searchInputRef.current.focus();
  }
};

return (
  <div className="community-page container">
    {/* Header Section */}
    <div className="overlay">
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-main">
        <div className="container-fluid navbar-box d-flex">
          
          {/* Navbar brand/logo with click handler */}
          <a className="navbar-brand" href="logo" onClick={handleLogoClick}>
            <img src='./images/logo.png' alt='logo' />
          </a>

          {/* Navbar toggle button for mobile view */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links and right-side buttons */}
          <div className="collapse navbar-collapse nav-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" href="Plants">Plants</a></li>
              <li className="nav-item"><a className="nav-link active" href="Community">Community</a></li>
              <li onClick={handleShopClick} className="nav-item"><a className="nav-link active" href="Shop">Shop</a></li>
              <li className="nav-item"><a className="nav-link active" href="Aboutus">About Us</a></li>
            </ul>

            {/* Right nav (search and login) */}
            <div className="nav-right">
              <form className="d-flex search-button" role="search" onSubmit={(e) => e.preventDefault()}>
                <input 
                  ref={searchInputRef} 
                  className={`form-control me-2 ${showInput ? 'show' : 'hide'}`}
                  type="search" 
                  placeholder="Search" 
                  aria-label="Search" 
                />
                <button className="btn btn-outline-success" type="button" onClick={handleSearchClick}>
                  <img src='./icons/search-normal.svg' alt='search' />
                </button>
              </form>
              <button onClick={handleLoginClick} className="login-button">
                <img src='./icons/user.svg' alt='login' />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>


    <div className="service-page">
      <h1>Our Services</h1>
      <p>Explore the various services we offer to help you maintain and enhance your plant collection.</p>
      <div className="services-list">
        <div className="service-card">
          <h2>Garden Maintenance</h2>
          <p>We offer tailored garden maintenance plans to suit your schedule and needs.</p>
        </div>
        <div className="service-card">
          <h2>Plant Consultation</h2>
          <p>Our experts can help you choose and care for the best plants for your environment.</p>
        </div>
        <div className="service-card">
          <h2>Online Plant Store</h2>
          <p>Order plants online with delivery options right to your doorstep.</p>
        </div>
      </div>
    </div>
    <div className="service-page">
      <div className="services-list">
        <div className="service-card">
          <h2>Garden Maintenance</h2>
          <p>We offer tailored garden maintenance plans to suit your schedule and needs.</p>
        </div>
        <div className="service-card">
          <h2>Plant Consultation</h2>
          <p>Our experts can help you choose and care for the best plants for your environment.</p>
        </div>
        <div className="service-card">
          <h2>Online Plant Store</h2>
          <p>Order plants online with delivery options right to your doorstep.</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Community;