import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';
import Footer from './Footer';
import '../styles/pages/_aboutus.scss';

const Aboutus = () => {
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const [showInput, setShowInput] = useState(false);

  const handleLoginClick = () => navigate('/login');
  const handleSearchClick = () => {
    setShowInput(true);
    if (searchInputRef.current) searchInputRef.current.focus();
  };

  return (
    <>
      {/* Page Container */}
      <div className="aboutus-page container">
        {/* Header Section */}
        <div className="overlay">
          <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-main">
            <div className="container-fluid navbar-box d-flex">
              {/* Navbar Brand */}
              <Link to="/" className="navbar-brand">
                <img src="./images/logo.png" alt="logo" />
              </Link>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse nav-center" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item"><Link to="/plants" className="nav-link active">Plants</Link></li>
                  <li className="nav-item"><Link to="/community" className="nav-link active">Community</Link></li>
                  <li className="nav-item"><Link to="/shop" className="nav-link active">Shop</Link></li>
                  <li className="nav-item"><Link to="/aboutus" className="nav-link active">About Us</Link></li>
                </ul>

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
                      <img src="./icons/search-normal.svg" alt="search" />
                    </button>
                  </form>
                  <button onClick={handleLoginClick} className="login-button">
                    <img src="./icons/user.svg" alt="login" />
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* About Section */}
        <div className="about-page">
          <h1>About Us</h1>
          <p>Learn more about our journey and what makes us passionate about plants.</p>
          <div className="team">
            {['A', 'B', 'C', 'D', 'E'].map((member, index) => (
              <div key={index} className="team-member">
                <img src={`./images/${index + 1}.jpg`} alt={`Team member ${member}`} />
                <h2>Team Member {member}</h2>
                <p>Position {index + 1}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
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
        <div className="service-page container"></div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Aboutus;
