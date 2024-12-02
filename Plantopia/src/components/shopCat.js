import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/_shopCat.scss';

// Sample Data for Product Catalogue
const productCatalogue = [
    { id: 1, image: './images/1.jpg', title: 'Modern Picture 1', price: '$15.00', originalPrice: '$25.00', reviews: 10, avgReviewScore: 4.5 },
    { id: 2, image: './images/2.jpg', title: 'Modern Picture 2', price: '$20.00', originalPrice: '$20.00', reviews: 8, avgReviewScore: 4.0 },
    { id: 3, image: './images/3.jpg', title: 'Modern Picture 3', price: '$18.00', originalPrice: '$28.00', reviews: 15, avgReviewScore: 4.8 },
    { id: 4, image: './images/4.jpg', title: 'Modern Picture 4', price: '$22.00', originalPrice: '$32.00', reviews: 5, avgReviewScore: 3.9 },
    { id: 5, image: './images/5.jpg', title: 'Modern Picture 5', price: '$16.00', originalPrice: '$26.00', reviews: 12, avgReviewScore: 4.2 },
    { id: 6, image: './images/6.jpg', title: 'Modern Picture 6', price: '$14.00', originalPrice: '$24.00', reviews: 7, avgReviewScore: 3.8 },
    { id: 7, image: './images/7.jpg', title: 'Modern Picture 7', price: '$19.00', originalPrice: '$29.00', reviews: 9, avgReviewScore: 4.1 },
    { id: 8, image: './images/8.jpg', title: 'Modern Picture 8', price: '$21.00', originalPrice: '$31.00', reviews: 11, avgReviewScore: 4.6 },
];

// Catalogue Component
const Catalogue = () => (
    <section className="catalogue">
    <h2>Product Catalogue</h2>
    <div className="row">
        {productCatalogue.map((product) => (
            <div key={product.id} className="col-md-3">
                <div className="product-card card">
                    <img
                        src={product.image}
                        alt={`Image of ${product.title}`}
                        className="card-img-top"
                        loading="lazy"
                    />
                    <div className="card-body text-center">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="price">
                            {product.price}{' '}
                            {product.price !== product.originalPrice && (
                                <span className="original-price">{product.originalPrice}</span>
                            )}
                        </p>
                        <div className="review-info">
                            <div className="stars">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <span
                                        key={i}
                                        className={`star ${i < Math.round(product.avgReviewScore) ? 'filled' : ''}`}
                                    >
                                        &#9733;
                                    </span>
                                ))}
                            </div>
                            <p className="review-count">({product.reviews})</p>
                        </div>
                        <button className="btn btn-outline-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
</section>
);

// Plants Component Repurposed for Shop Catalogue
const ShopCat = () => {
    const navigate = useNavigate();
    const searchInputRef = useRef(null);
    const [showInput, setShowInput] = useState(false);

    const handleLogoClick = (event) => {
        event.preventDefault();
        navigate('/');
    };

    const handleLoginClick = () => navigate('/login');
    const handleSearchClick = () => {
        setShowInput(true);
        if (searchInputRef.current) searchInputRef.current.focus();
    };

    return (
        <div className="shop-page">
            {/* Header Section */}
            <header className="overlay">
                <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-main">
                    <div className="container-fluid navbar-box d-flex">
                        <a className="navbar-brand" href="#" onClick={handleLogoClick}>
                            <img src="/images/logo.png" alt="Plantopia Logo" />
                        </a>
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
                        <div className="collapse navbar-collapse nav-center" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#shop">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#community">Community</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#about">About Us</a>
                                </li>
                            </ul>
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
                                        <img src="/icons/search-normal.svg" alt="Search" />
                                    </button>
                                </form>
                                <button onClick={handleLoginClick} className="login-button">
                                    <img src="/icons/user.svg" alt="Login" />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Main Section */}
            <main className="product-page">
                <h1 className="title-text">
                    Explore Our Products
                    <img src="/images/shop_icon.png" alt="Shop Icon" className="shop-icon" />
                </h1>
                <Catalogue />
            </main>

            {/* Footer */}
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
                <p className="footer-note text-center mt-4">shop.com © All rights reserved</p>
            </footer>
        </div>
    );
};

export default ShopCat;
