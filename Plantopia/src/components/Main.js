// src/pages/Main.js

import React, { useRef, useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/_main.scss';

const MainPage = () => {
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  
  // `showInput` state: input ko'rinishini boshqaradi
  const [showInput, setShowInput] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // New state

  // Search tugmasi bosilganda inputni ko'rsatish funksiyasi
  const handleSearchClick = () => {
    setShowInput(true); // `showInput` ni true qilib inputni ko'rsatish
    if (searchInputRef.current) {
      searchInputRef.current.focus(); // Fokusni inputga o'rnatish
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



  // useEffect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) { // Trigger after 100vh
        setIsScrolled(true); // Set `isScrolled` to true
      } else {
        setIsScrolled(false); // Reset when scrolled back up
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup listener
  }, []);

  return (
    <div className="main-page">
      {/* First Page Section */}
      <div className="first-page">
        <div className={`overlay ${isScrolled ? 'scrolled' : ''}`}> {/* Conditional class addition */}
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
                      className={`form-control me-2 ${showInput ? 'show' : 'hide'}`} // Shartli class
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

        {/* Welcome text section */}
        <div className='welcome-text'>
          <h2>Welcome to</h2>
          <h1>Plantopia</h1>
        </div>
      </div>








      {/* Second Page Section */}
      <div className="main-second">
        <section className="what-we-provide">
          <img src="./images/info_plant.jpg" alt="Plant" className="provide-image" />
          <img src='./icons/green.png' alt='green' className='green'/>
          <div className="provide-content">
            <h2>What We Provide</h2>
            <ul>
              <li><strong>Schedule Vice Garden Maintain</strong><p>Garden management services, schedule your garden maintenance as needed.</p></li>
              <li><strong>As Per Requirement Garden Maintain</strong><p>Customized maintenance based on garden needs.</p></li>
              <li><strong>Online Plant Selling</strong><p>Order plants online with delivery and maintenance guidance.</p></li>
            </ul>
            <button className="more-info-button">More Info</button>
          </div>
        </section>

        <section className="individual-blogs">
          <h2>Individual Blogs</h2>
          <div className="blog-content">
            <img src="./images/1.jpg" alt="Blog" className="blog-image" />
            <div className="blog-details">
              <h3>Echinocereus Cactus</h3>
              <h4>A Majestic Addition to Your Plant Collection</h4>
              <h5>Features</h5>
              <ul>
                <li>Low maintenance and requires minimal watering.</li>
                <li>Prefers sunlight and well-drained soil.</li>
                <li>Perfect for indoor and outdoor environments.</li>
              </ul>
              <h5>Description</h5>
              <p>The Echinocereus Cactus is a unique addition to any collection, known for its resilience and beauty. Ideal for both beginner and experienced gardeners.</p>
              <div className="tags">
                <div className="tag">Sunlight</div>
                <div className="tag">Soil</div>
              </div>
            </div>
          </div>
        </section>

        <section className="our-products">
          <h2>Our Products</h2>
          <div className="product-list">
            <div className="product-item"><img src="./images/1.jpg" alt="Modern Plant" /><h4>Modern Picture</h4><p>$15.99</p><button className="add-to-cart">Add to Cart</button></div>
            <div className="product-item"><img src="./images/2.jpg" alt="Modern Plant" /><h4>Modern Picture</h4><p>$15.99</p><button className="add-to-cart">Add to Cart</button></div>
          </div>
        </section>

        <section className="user-comments">
          <h2>User Comments</h2>
          <div className="comment-box">
            <div className="rating"><span>4.2 ★</span></div>
            <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet ex ac eros sagittis.</p>
            <div className="comment-author">
              <img src="./images/4.jpg" alt="User" />
              <span className="author-name">Danny Sena</span>
              <span className="author-position">Co-founder of MyCompany</span>
            </div>
            <button className="drop-comment">Drop Comment</button>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-logo"><img src="./images/3.jpg" alt="Plantopia Logo" /></div>
          <div className="footer-links"><a href="#home">Home</a><a href="#gardner">Gardner</a><a href="#contact">Contact</a><a href="#privacy">Privacy</a></div>
          <div className="footer-social"><h3>Social</h3><a href="#facebook"><i className="fab fa-facebook"></i></a><a href="#linkedin"><i className="fab fa-linkedin"></i></a><a href="#instagram"><i className="fab fa-instagram"></i></a></div>
          <div className="subscribe">
            <h3>Subscribe For Updates</h3>
            <input type="email" placeholder="Enter email..." />
            <button>Subscribe</button>
          </div>
          <p className="footer-note">garden.com © All rights reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default MainPage;