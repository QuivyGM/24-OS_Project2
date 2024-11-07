// src/components/Service.js

import React from 'react';
import '../styles/pages/_service.scss';

const Service = () => {
  return (
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
  );
};

export default Service;