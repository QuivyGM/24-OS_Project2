import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
import Footer from "../Footer";
import '../../styles/pages/_shop.scss';

const productCatalogue = [
  { id: 1, image: './images/1.jpg', title: 'Modern Picture 111', price: '$15.00', originalPrice: '$25.00', reviews: 10, avgReviewScore: 4.5 },
  { id: 2, image: './images/2.jpg', title: 'Modern Picture 2', price: '$20.00', originalPrice: '$20.00', reviews: 8, avgReviewScore: 4.0 },
  { id: 3, image: './images/3.jpg', title: 'Modern Picture 3', price: '$18.00', originalPrice: '$28.00', reviews: 15, avgReviewScore: 4.8 },
  { id: 4, image: './images/4.jpg', title: 'Modern Picture 4', price: '$22.00', originalPrice: '$32.00', reviews: 5, avgReviewScore: 3.9 },
];

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleProductClick = (product) => {
      setSelectedProduct(product);
      setShowModal(true);
  };

  const closeModal = () => {
      setShowModal(false);
  };

  const navigate = useNavigate();

  const handleShopCatClick = () => {
    navigate('/ShopCat');
  };

  // 장바구니 --------- ---------

  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const shippingCost = 7.24; // 배송비

  const handleAddToCart = (price) => {
    setSubtotal(prevSubtotal => {
      const newSubtotal = prevSubtotal + (price === '$139.99' ? 139.99 : parseFloat(price.replace('$', '')));
      setTotal(newSubtotal + shippingCost);
      return newSubtotal;
    });
  };

  return (
    <div>
      <div className="shop-page container">
        {/* Header Section */}
        <Navbar />

        <h1 className="title-text">
                    Explore Our Products
                    <img src="/images/shop_icon.png" alt="Shop Icon" className="shop-icon" />
                </h1>
        {/* Product Detail Section */}
        <div className="product-detail row">
        <div className="medal">
                                <img src="/icons/gold.png" alt="gold medal" />
                            </div>
          <div className="image-frame col-md-6">
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
            <button className="btn btn-outline-secondary ms-2" onClick={() => handleAddToCart('$139.99')}>Add to cart</button>
            <div className="features mt-4">
              
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
                      onClick={() => handleProductClick(product)}
                    >
                      See More
                    </button>
                    <button className="btn btn-outline-secondary ms-2" onClick={() => handleAddToCart(product.price)}>Add to cart</button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Section */}
        <div className="payments mt-5">
          <h2>Payments</h2>
          <div className="row row-payments">
            <div className="col-md-4 order-summary">
              <h4>Order</h4>
              {/* <p>Echinocereus Cactus - $139.80</p> */}
              <p>If you have a gift or discount code, enter it below.</p>
              <input type="text" className="form-control mb-2" placeholder="Gift or discount code" />
              <button className="btn btn-primary">Apply</button>
              <p className="subtotal">Subtotal: ${subtotal.toFixed(2)}</p>
              <p className="shipping">Shipping: ${shippingCost.toFixed(2)}</p>
              <p className="total">Total: ${total.toFixed(2)}</p>
            </div>
            <div className="col-md-4 payment-method">
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
              <button className="btn btn-success mt-3">Pay USD ${total.toFixed(2)}</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
      
      {showModal && selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.image} alt={selectedProduct.title} className="modal-image" />
            <div className="modal-text">
              <h3>{selectedProduct.title}</h3>
              <p>Price: {selectedProduct.price}</p>
              <p>Original Price: {selectedProduct.originalPrice}</p>
              <p>Reviews: {selectedProduct.reviews}</p>
              <p>Average Score: {selectedProduct.avgReviewScore} ★</p>
            </div>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default Shop;
