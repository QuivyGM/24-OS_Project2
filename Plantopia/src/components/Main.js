// src/pages/Main.js

import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/_main.scss';

const MainPage = () => {
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  
  const [showInput, setShowInput] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* First Page Section */}
      <div className="first-page">
        <div className={`overlay ${isScrolled ? 'scrolled' : ''}`}>
          <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-main">
            <div className="container-fluid navbar-box d-flex">
              <a className="navbar-brand" href="/" onClick={handleLogoClick}>
                <img src='./images/logo.png' alt='logo' />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Navbar links */}
              <div className="collapse navbar-collapse nav-center" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item"><a className="nav-link active" onClick={handlePlantsClick} href='plants'>Plants</a></li>
                  <li className="nav-item"><a className="nav-link active" onClick={handleCommunityClick} href='community'>Community</a></li>
                  <li className="nav-item"><a className="nav-link active" onClick={handleShopClick} href='shop'>Shop</a></li>
                  <li className="nav-item"><a className="nav-link active" onClick={handleAboutusClick} href='aboutus'>About Us</a></li>
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

        {/* Welcome text section */}
        <div className='welcome-text'>
          <h2>Welcome to</h2>
          <h1>Plantopia</h1>
        </div>
      </div>
{/* --------------------------------------------------------------------------------------------------------------- */}
      
      {/* Second Page Section */}
      <div className="main-second">
        {/* What We Provide Section */}
        <section className="what-we-provide text-center py-5">
          <div className="row align-items-center">
            <div className="col-md-4 info-plant-img">
              <img src="./images/info_plant.jpg" alt="Plant" className="img-fluid provide-image" />
            </div>
            <div className="col-md-8 provide-content">
              <h2>What We Provide</h2>
              <ul className="list-unstyled">
                <li>
                  <strong>Schedule Vice Garden Maintain</strong>
                  <p>Garden management services, schedule your garden maintenance as needed.</p>
                </li>
                <li>
                  <strong>As Per Requirement Garden Maintain</strong>
                  <p>Customized maintenance based on garden needs.</p>
                </li>
                <li>
                  <strong>Online Plant Selling</strong>
                  <p>Order plants online with delivery and maintenance guidance.</p>
                </li>
              </ul>
              <button className="btn btn-success more-info-button mt-3">More Info</button>
            </div>
          </div>
        </section>

        {/* Individual Blogs Section */}
        <section className="individual-blogs py-5">
          <h2 className="text-center blog-title">Individual Blogs</h2>
          <div className="btn btn more-button-div">
            <button 
                className="more-button" 
                onClick={handlePlantsClick} href='shop'
              >
                More...
            </button>
          </div>
          <div className="row ">
            <div className="col-md-5 blog-image-box">
              <img src="./images/1.jpg" alt="Blog" className="img-fluid blog-image" />
            </div>
            <div className="col-md-7 blog-details">
              <h3>Echinocereus Cactus</h3>
              <h4>A Majestic Addition to Your Plant Collection</h4>
              <div className="tags mt-2">
                <span className="badge me-2">Sunlight</span>
                <span className="badge">Soil</span>
              </div>
              <h5>Features</h5>
              <ul>
                <li>Low maintenance and requires minimal watering.</li>
                <li>Prefers sunlight and well-drained soil.</li>
                <li>Perfect for indoor and outdoor environments.</li>
              </ul>
              <h5>Description</h5>
              <p>TLadyfinger cactus (*Echinocereus pentalophus*) is also known as Alice, Devil's Fingers, and Dog Tail. It needs bright sunlight, light fertilizer, and is prone to root rot. The root system is shallow and weak. Aphids and mealybugs are also a danger. Avoiding wet soil can help with success with a ladyfinger cactus.</p>
              {/* Accordion Sunlight and Soil */}
              <div class="container mt-4">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button collapsed bg-light-blue" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <img src="./icons/Sunlight.png" alt="Sunlight Icon" class="me-2" width="48" height="48" /> Sunlight
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Content about sunlight.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet ex ac eros sagittis.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button collapsed bg-light-gray" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <img src="./icons/Soil.png" alt="Soil Icon" class="me-2" width="48" height="48" /> Soil
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Content about soil.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet ex ac eros sagittis.
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </section>

        {/* Our Products Section */}
        <section className="our-products py-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="text-center mb-0">Our Products</h2>
          </div>
          <div className="btn btn more-button-div">
            <button 
                className="more-button" 
                onClick={handleShopClick} href='shop'
              >
                More...
            </button>
          </div>
          <div className="row">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="col-6 col-md-3 mb-4">
                <div className="card product-item">
                  <img src={`./images/${item}.jpg`} alt="Product" className="card-img-top" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Modern Picture</h5>
                    <p className="price">$15.99</p>
                    <button className="btn btn-outline-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* User Comments Section */}
        <section className="user-comments py-5">
          <h2 className="text-center mb-4">User Comments</h2>
          <div className="btn btn more-button-div">
            <button 
                className="more-button" 
                onClick={handleCommunityClick} href='shop'
              >
                More...
            </button>
          </div>
          <div className="comment-box p-4">
            <div className="comment-author mt-3 d-flex align-items-center">
              <img src="./images/4.jpg" alt="User" className="rounded-circle" />
              <div className="ms-3">
                <p className="author-name">Danny Sena</p>
                <p className="author-position">Co-founder of MyCompany</p>
              </div>
            </div>
            <div className=" star-info">
              <div className="rating">4.2 ★★★★</div>
              <div className="comment-text mx-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet ex ac eros sagittis.</p>
              </div>
            </div>
            <button className="btn btn-link drop-comment mt-3">Drop Comment</button>
          </div>
          <div className="text-center top mt-3">
              <button 
                className="back-to-top" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                ↑
              </button>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="footer py-5">
          <div className="row logo-links">
            <div className="col-md-3 footer-logo">
              <img src="./images/logo.png" alt="Plantopia Logo" onClick={handleLogoClick}/>
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
    </div>
  );
};

export default MainPage;