// Import necessary modules and components
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/_plants.scss';

// Plants component
const Plants = () => {
    // State and references
    const navigate = useNavigate();
    const searchInputRef = useRef(null);
    const [showInput, setShowInput] = useState(false);

    // Handlers for navigation
    const handleLogoClick = (event) => {
        event.preventDefault();
        navigate('/');
    };

    const handleLoginClick = () => navigate('/login');
    const handleShopClick = () => navigate('/shop');
    const handleSearchClick = () => {
        setShowInput(true);
        if (searchInputRef.current) searchInputRef.current.focus();
    };

    return (
        <div className="plants-page">
            {/* Header Section */}
            <header className="overlay">
                <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-main">
                    <div className="container-fluid navbar-box d-flex">
                        {/* Navbar Brand */}
                        <a className="navbar-brand" href="#" onClick={handleLogoClick}>
                            <img src="/images/logo.png" alt="logo" />
                        </a>

                        {/* Navbar Toggle for Mobile View */}
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

                        {/* Navbar Links */}
                        <div className="collapse navbar-collapse nav-center" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">
                                        Plants
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">
                                        Community
                                    </a>
                                </li>
                                <li className="nav-item" onClick={handleShopClick}>
                                    <a className="nav-link active" href="#">
                                        Shop
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">
                                        About Us
                                    </a>
                                </li>
                            </ul>

                            {/* Search and Login */}
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
                                    <button
                                        className="btn btn-outline-success"
                                        type="button"
                                        onClick={handleSearchClick}
                                    >
                                        <img src="/icons/search-normal.svg" alt="search" />
                                    </button>
                                </form>
                                <button onClick={handleLoginClick} className="login-button">
                                    <img src="/icons/user.svg" alt="login" />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Title */}
            <main className="product-page">
                <h1 className="title-text">
                    Find Your <br />
                    Perfect Plant
                    <img src="/images/plant_icon.png" alt="Plant Icon" className="plant-icon" />
                </h1>

                <section className="Weekly_frame">
                    <h2>Plant of the Week</h2>
                    <hr className="custom-hr" />

                    {/* Plant Details */}
                    <div className="weekly_plant">
                        {/* Weekly - Image */}
                        <div>
                            <div className="image_frame">
                                <img src="/images/1.jpg" alt="Echinocereus Cactus" className="top_plant" />
                                <img src="/images/crown.png" alt="Crown" className="crown_image" />
                            </div>
                        </div>

                        {/* Weekly - Info */}
                        <div className="info_frame">
                            <h2>Echinocereus Cactus</h2>

                            <div className="tags">
                                <span className="badge bg-success">Indoor</span>
                                <span className="badge bg-success">Cactus</span>
                            </div>
                            <hr className="custom-hr" />
                            <div className="features">
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
                                <p>
                                    The Echinocereus Cactus is known for its beauty and resilience. Perfect for both indoor
                                    and outdoor settings.
                                </p>
                            </div>
                        </div>

                        {/* Weekly - Others Carousel */}
                        <div className="weekly_others">
                            <h2>Other Popular Plants</h2>
                            
                            <div id="horizontalCarousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    {['1.jpg', '2.jpg', '3.jpg', '4.jpg'].map((fileName, index) => (
                                        <div
                                            key={fileName}
                                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                        >
                                            <div className="product-card card mx-auto">
                                                <img
                                                    src={`./images/${fileName}`}
                                                    alt={fileName}
                                                    className="card-img-top"
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title">{fileName}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#horizontalCarousel"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#horizontalCarousel"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div> {/* end of weekly plant */}
                </section> {/* end of weekly frame */}

                {/* plant catalogue*/}
                <section className="catalogue">

                </section>


                
            </main> {/* end of product page */}
            {/* Footer Section */}
        <footer className="footer py-5">
          <div className="row text-center">
            <div className="col-md-3 footer-logo">
              <img src="./images/logo.png" alt="Plantopia Logo" />
            </div>
            <div className="col-md-3 footer-links">
              <a href="#home">Home</a>
              <a href="#gardner">Gardner</a>
              <a href="#contact">Contact</a>
              <a href="#privacy">Privacy</a>
            </div>
            <div className="col-md-3 footer-social">
              <h3>Social</h3>
              <a href="#facebook"><i className="fab fa-facebook"></i></a>
              <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
              <a href="#instagram"><i className="fab fa-instagram"></i></a>
            </div>
            <div className="col-md-3 subscribe">
              <h3>Subscribe For Updates</h3>
              <input type="email" placeholder="Enter email..." className="form-control mb-2" />
              <button className="btn button-subscribe">Subscribe</button>
            </div>
          </div>
          <p className="footer-note text-center mt-4">garden.com © All rights reserved</p>
        </footer>
        </div>  // end of plants page
    );
};

export default Plants;
