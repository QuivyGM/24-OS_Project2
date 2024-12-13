// src/components/Shop.js

import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/_shop.scss';

const productCatalogue = [
  { id: 1, image: './images/1.jpg', title: 'Modern Picture 111', price: '$15.00', originalPrice: '$25.00', reviews: 10, avgReviewScore: 4.5 },
  { id: 2, image: './images/2.jpg', title: 'Modern Picture 2', price: '$20.00', originalPrice: '$20.00', reviews: 8, avgReviewScore: 4.0 },
  { id: 3, image: './images/3.jpg', title: 'Modern Picture 3', price: '$18.00', originalPrice: '$28.00', reviews: 15, avgReviewScore: 4.8 },
  { id: 4, image: './images/4.jpg', title: 'Modern Picture 4', price: '$22.00', originalPrice: '$32.00', reviews: 5, avgReviewScore: 3.9 },
];

const Shop = () => {
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  const [showInput, setShowInput] = useState(false);

  const handleSearchClick = () => {
    setShowInput(true);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleLogoClick = (event) => {
    event.preventDefault();
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleShopClick = () => {
    navigate('/shop');
  };

  const handlePlantsClick = () => {
    navigate('/plants');
  };

  const handleCommunityClick = () => {
    navigate('/community');
  };

  const handleAboutusClick = () => {
    navigate('/aboutus');
  };

  const handleShopCatClick = () => {
    navigate('/ShopCat');
  };

  return (
    <div>
      <div className="shop-page container">
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

        {/* Product Detail Section */}
        <div className="product-detail row">
          <div className="col-md-6">
            <img src="./images/1.jpg" alt="Echinocereus Cactus" className="product-image" />
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
          <div className="title-container">
            <h2>Related Products</h2>
            <button onClick={handleShopCatClick} className="btn btn-outline-secondary">
              See More
            </button>
          </div>
          <div className="row">
            {productCatalogue.map((product) => (
              <div key={product.id} className="col-md-3">
                <div className="product-card card">
                  <img src={product.image} alt={product.title} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="price">
                      {product.price}{' '}
                      {product.price !== product.originalPrice && (
                        <span className="original-price">{product.originalPrice}</span>
                      )}
                    </p>
                    <div className="review-info">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={`star ${i < Math.round(product.avgReviewScore) ? 'filled' : ''}`}>
                          &#9733;
                        </span>
                      ))}
                      <span className="review-count">({product.reviews})</span>
                    </div>
                    <button
                      className="btn btn-success"
                      onClick={() => navigate(`/post/${product.id}`)} // Navigate to Post page
                      style={{ cursor: 'pointer' }}
                    >
                      See More
                    </button>
                    <button className="btn btn-outline-secondary ms-2">Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Section */}
        <div className="payments mt-5">
          <h2>Payments</h2>
          <div className="row">
            <div className="col-md-6 order-summary">
              <h4>Order Summary</h4>
              <p>Echinocereus Cactus - $139.80</p>
              <input type="text" className="form-control mb-2" placeholder="Gift or discount code" />
              <button className="btn btn-primary">Apply</button>
              <p className="subtotal">Subtotal: $139.80</p>
              <p className="shipping">Shipping: $7.24</p>
              <p className="total">Total: $146.28</p>
            </div>
            <div className="col-md-6 payment-method">
              <h4>Payment</h4>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="paymentMethod" id="card" checked />
                <label className="form-check-label" htmlFor="card">Card</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="paymentMethod" id="bank" />
                <label className="form-check-label" htmlFor="bank">Bank</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="paymentMethod" id="transfer" />
                <label className="form-check-label" htmlFor="transfer">Transfer</label>
              </div>
              <input type="text" className="form-control mt-2" placeholder="Card Number" />
              <input type="text" className="form-control mt-2" placeholder="Expiration Date" />
              <input type="text" className="form-control mt-2" placeholder="CVV" />
              <button className="btn btn-success mt-3">Pay USD 149.28</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer py-5">
        <div className="row logo-links">
          <div className="col-md-3 footer-logo">
            <img src="./images/logo.png" alt="Plantopia Logo" onClick={handleLogoClick} />
          </div>
          <div className="col-md-3 footer-links">
            <a className="nav-link active" onClick={handlePlantsClick} href='plants'>Plants</a>
            <a className="nav-link active" onClick={handleCommunityClick} href='community'>Community</a>
            <a className="nav-link active" onClick={handleShopClick} href='shop'>Shop</a>
            <a className="nav-link active" onClick={handleAboutusClick} href='aboutus'>About Us</a>
          </div>
        </div>
        <p className="footer-note text-center mt-4">Plantopia © All rights reserved</p>
      </footer>
    </div>
  );
};

export default Shop;
