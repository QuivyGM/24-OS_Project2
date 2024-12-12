// Import necessary modules and components
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/_plants.scss';
import Footer from './Footer';

// Sample Data
const popularPlants = [
    { id: 1, image: './images/1.jpg', title: 'Fiddle Leaf Fig' },
    { id: 2, image: './images/2.jpg', title: 'Snake Plant' },
    { id: 3, image: './images/3.jpg', title: 'Peace Lily' },
    { id: 4, image: './images/4.jpg', title: 'Monstera Deliciosa' },
];

// Carousel Item Component
const CarouselItem = ({ image, title, isActive }) => (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
        <div className="product-card card mx-auto">
            <img
                src={image}
                alt={title}
                className="card-img-top"
                loading="lazy"
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    </div>
);

// Weekly Others Component
const WeeklyOthers = () => (
    <div className="weekly_others">
    <h2>Other Popular Plants</h2>
    <div id="horizontalCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            {popularPlants.map((plant, index) => (
                <CarouselItem
                    key={plant.id}
                    image={plant.image}
                    title={plant.title}
                    isActive={index === 0}
                />
            ))}
        </div>
        <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#horizontalCarousel"
            data-bs-slide="prev"
            aria-label="Previous popular plants"
        >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#horizontalCarousel"
            data-bs-slide="next"
            aria-label="Next popular plants"
        >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
    </div>
</div>
);

// Catalogue Component
const Catalogue = () => {
    const navigate = useNavigate();
    const plantCatalogue = [
        { id: 1, image: './images/1.jpg', title: 'Modern Picture 1', rating: 5 },
        { id: 2, image: './images/2.jpg', title: 'Modern Picture 2', rating: 4 },
        { id: 3, image: './images/3.jpg', title: 'Modern Picture 3', rating: 3 },
        { id: 4, image: './images/4.jpg', title: 'Modern Picture 4', rating: 4 },
        { id: 5, image: './images/5.jpg', title: 'Modern Picture 5', rating: 4 },
        { id: 6, image: './images/6.jpg', title: 'Modern Picture 6', rating: 4 },
        { id: 7, image: './images/7.jpg', title: 'Modern Picture 7', rating: 4 },
        { id: 8, image: './images/8.jpg', title: 'Modern Picture 8', rating: 4 },
        { id: 9, image: './images/1.jpg', title: 'Modern Picture 1', rating: 5 },
        { id: 10, image: './images/2.jpg', title: 'Modern Picture 2', rating: 4 },
        { id: 11, image: './images/3.jpg', title: 'Modern Picture 3', rating: 3 },
        { id: 12, image: './images/4.jpg', title: 'Modern Picture 4', rating: 4 },
        { id: 13, image: './images/5.jpg', title: 'Modern Picture 5', rating: 4 },
        { id: 14, image: './images/6.jpg', title: 'Modern Picture 6', rating: 4 },
        { id: 15, image: './images/7.jpg', title: 'Modern Picture 7', rating: 4 },
        { id: 16, image: './images/8.jpg', title: 'Modern Picture 8', rating: 4 },
        { id: 17, image: './images/1.jpg', title: 'Modern Picture 1', rating: 5 },
        { id: 18, image: './images/2.jpg', title: 'Modern Picture 2', rating: 4 },
        { id: 19, image: './images/3.jpg', title: 'Modern Picture 3', rating: 3 },
        { id: 20, image: './images/4.jpg', title: 'Modern Picture 4', rating: 4 },
        { id: 21, image: './images/5.jpg', title: 'Modern Picture 5', rating: 4 },
        { id: 22, image: './images/6.jpg', title: 'Modern Picture 6', rating: 4 },
        { id: 23, image: './images/7.jpg', title: 'Modern Picture 7', rating: 4 },
        { id: 34, image: './images/8.jpg', title: 'Modern Picture 8', rating: 4 },
    ];

    const handleSeeMoreClick = (plantId) => {
        navigate(`/post/${plantId}`); // Navigate to Post.js with plantId as a parameter
    };

    return (
        <section className="catalogue">
            <h2>Catalogue</h2>
            <div className="row">
                {plantCatalogue.map((plant) => (
                    // <div class="row gx-0 gy-2">
                    <div key={plant.id} className="col-md-3 d-flex justify-content-center">
                        <div className="product-card card pt-3 pb-3" style={{ height: '90%' }}>
                            <img
                                src={plant.image}
                                alt={plant.title}
                                className="card-img-top"
                                loading="lazy"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{plant.title}</h5>
                                <div className="star-rating">
                                    {[...Array(5)].map((_, index) => (
                                        <span
                                            key={index}
                                            className={`star ${index < plant.rating ? 'filled' : ''}`}
                                        >
                                            &#9733;
                                        </span>
                                    ))}
                                </div>
                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => handleSeeMoreClick(plant.id)}
                                >
                                    See More
                                </button>
                            </div>
                        </div>
                    </div>
                    // </div>
                ))}
            </div>
        </section>  
    );
};

// Plants Component
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
    }

    return (
        <div className="plants-page">
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


            {/* Main Section */}
            <main className="product-page">
                <h1 className="title-text">
                    Find Your <br />
                    Perfect Plant
                    <img src="/images/plant_icon.png" alt="Plant Icon" className="plant-icon" />
                </h1>
                <section className="Weekly_frame">
                    <h2>Plant of the Week</h2>
                    <hr className="custom-hr" />
                    <div className="weekly_plant">
                        <div className="image_frame">
                            <img src="/images/1.jpg" alt="Echinocereus Cactus" className="top_plant" />
                            <img src="/images/crown.png" alt="Crown" className="crown_image" />
                        </div>
                        <div className="info_frame">
                            <h2>Echinocereus Cactus</h2>
                            <div className="tags">
                                <span className="badge bg-success">Indoor</span>
                                <span className="badge bg-success">Cactus</span>
                            </div>
                            <hr className="custom-hr" />
                            <h4>Features</h4>
                            <ul>
                                <li>Species: Echinocereus spp.</li>
                                <li>Size: Varies by species, 4-12 inches in height</li>
                                <li>Season: Spring or summer</li>
                                <li>Available in various pot sizes</li>
                                <li>Carefully packaged for safe delivery</li>
                            </ul>
                            <h4>Description</h4>
                            <p>The Echinocereus Cactus is known for its beauty and resilience. Perfect for indoor and outdoor settings.</p>
                        </div>
                        <WeeklyOthers />
                    </div>
                    
                </section>
                
                <Catalogue />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Plants;
