import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/pages/_shopCat.scss';
import Navbar from "../Navbar";
import Footer from "../Footer";

// Sample Product Data
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

// Product Card Component
const ProductCard = ({ product, onProductClick }) => {
    const { image, title, price, originalPrice, reviews, avgReviewScore } = product;

    return (
        <div className="col-md-3">
            <div className="product-card card">
                <img src={image} alt={title} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="price">
                        {price}{' '}
                        {price !== originalPrice && (
                            <span className="original-price">{originalPrice}</span>
                        )}
                    </p>
                    <div className="review-info">
                        {Array.from({ length: 5 }, (_, i) => (
                            <span key={i} className={`star ${i < Math.round(avgReviewScore) ? 'filled' : ''}`}>
                                &#9733;
                            </span>
                        ))}
                        <span className="review-count">({reviews})</span>
                    </div>
                    <button className="btn btn-success" onClick={() => onProductClick(product)}>
                        See More
                    </button>
                    <button className="btn btn-outline-secondary ms-2">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

// Catalogue Component
const Catalogue = ({ onProductClick }) => (
    <section className="catalogue">
        <h2>Product Catalogue</h2>
        <div className="row">
            {productCatalogue.map((product) => (
                <ProductCard key={product.id} product={product} onProductClick={onProductClick} />
            ))}
        </div>
    </section>
);

// ShopCat Component
const ShopCat = () => {
    const navigate = useNavigate();
    const searchInputRef = useRef(null);

    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    return (
        <div className="shop-page">
            {/* Header Section */}
            <Navbar />

            {/* Main Section */}
            <main className="product-page">
                <button className="back-button" onClick={() => navigate(-1)}>
                    ← Back
                </button>
                
                <Catalogue onProductClick={openModal} />
            </main>

            {/* Modal */}
            {showModal && selectedProduct && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedProduct.image} alt={selectedProduct.title} className="modal-image" />
                        <div className="modal-text">
                            <h3>{selectedProduct.title}</h3>
                            <p>Price: {selectedProduct.price}</p>
                            {selectedProduct.price !== selectedProduct.originalPrice && (
                                <p>Original Price: {selectedProduct.originalPrice}</p>
                            )}
                            <p>Reviews: {selectedProduct.reviews}</p>
                            <p>Average Score: {selectedProduct.avgReviewScore} ★</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ShopCat;
