// src/components/Product.js

import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/_plants.scss';

const Plants = () => {
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
  <div className="plants-page container">
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

    <div className="product-page">
      <h1>Our Products</h1>
      <div className="products-list">
        {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2].map((item) => (
          <div key={item} className="product-card">
            <img src={`./images/${item}.jpg`} alt={`Product ${item}`} />
            <h2>Product {item}</h2>
            <p className="price">$25.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
      
    </div>
  </div>
  );
};

export default Plants;