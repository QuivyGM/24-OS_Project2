// src/components/Product.js

import React from 'react';
import '../styles/pages/_plants.scss';

const Product = () => {
  return (
    <div className="product-page">
      <h1>Our Products</h1>
      <div className="products-list">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="product-card">
            <img src={`./images/${item}.jpg`} alt={`Product ${item}`} />
            <h2>Product {item}</h2>
            <p className="price">$25.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;