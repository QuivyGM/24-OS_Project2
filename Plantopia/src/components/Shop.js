// src/components/Shop.js

import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/_shop.scss';

const Shop = () => {
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const [showInput, setShowInput] = useState(false);

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleSearchClick = () => {
    setShowInput(true);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <div className="shop-page container">
      {/* Header Section */}
      <div className="overlay">
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-main">
          <div className="container-fluid navbar-box d-flex">
            {/* Navbar brand/logo with click handler */}
            <a
              className="navbar-brand"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/');
              }}
            >
              <img src="./images/logo.png" alt="logo" />
            </a>

            {/* Navbar toggle button for mobile view */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar links and right-side buttons */}
            <div className="collapse navbar-collapse nav-center" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <button
                    className="nav-link active btn-link"
                    onClick={() => handleNavigation('/plants')}
                  >
                    Plants
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link active btn-link"
                    onClick={() => handleNavigation('/community')}
                  >
                    Community
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link active btn-link"
                    onClick={() => handleNavigation('/shop')}
                  >
                    Shop
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link active btn-link"
                    onClick={() => handleNavigation('/aboutus')}
                  >
                    About Us
                  </button>
                </li>
              </ul>

              {/* Right nav (search and login) */}
              <div className="nav-right">
                <form
                  className="d-flex search-button"
                  role="search"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    ref={searchInputRef}
                    className={`form-control me-2 ${showInput ? 'show' : 'hide'}`}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="button" onClick={handleSearchClick}>
                    <img src="./icons/search-normal.svg" alt="search" />
                  </button>
                </form>
                <button
                  onClick={() => handleNavigation('/login')}
                  className="login-button"
                >
                  <img src="./icons/user.svg" alt="login" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Product Detail Section */}
      <div className="product-detail row">
        <div className="col-md-6">
          <img
            src="./images/1.jpg"
            alt="Echinocereus Cactus"
            className="product-image"
          />
        </div>
        <div className="col-md-6 product-info">
          <h2>Echinocereus Cactus</h2>
          <p className="subtitle">A Majestic Addition to Your Plant Collection</p>
          <div className="tags">
            <span className="badge bg-success">Indoor</span>
            <span className="badge bg-success">Cactus</span>
          </div>
          <h3 className="price">$139.99</h3>
          <button className="btn btn-success">Check out</button>
          <button className="btn btn-outline-secondary ms-2">Add to cart</button>
          <div className="features mt-4">
            <h4>Features</h4>
            <ul>
              <li>Species: Echinocereus spp.</li>
              <li>Size: Varies by species, 4-12 inches in height</li>
              <li>Season: Spring or summer</li>
              <li>Available in various pot sizes</li>
              <li>Carefully packaged for safe delivery</li>
            </ul>
          </div>
          <div className="description mt-3">
            <h4>Description</h4>
            <p>The Echinocereus Cactus is known for its beauty and resilience. Perfect for both indoor and outdoor settings.</p>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="related-products mt-5">
        <div className="title-container d-flex justify-content-between align-items-center">
          <h2>Related Products</h2>
          <button
            onClick={() => handleNavigation('/shopCat')}
            className="btn btn-outline-secondary"
          >
            See More
          </button>
        </div>
        <div className="row">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="col-md-3">
              <div className="product-card card">
                <img
                  src={`./images/${item}.jpg`}
                  alt="Product"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Modern Picture</h5>
                  <p className="price">
                    $15.00 <span className="original-price">$25.00</span>
                  </p>
                  <button className="btn btn-outline-primary">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
