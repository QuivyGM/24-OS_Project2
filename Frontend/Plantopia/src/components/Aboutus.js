import React, { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
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
        <Navbar />

        {/* About Section */}
        <div className="about-page">
          <h1>About Us</h1>
          <p>We are the Plantopia team! Learn more about our journey and what makes us passionate about plants.</p>
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

        <div className="contacts-page">
          <h1>Contact Us</h1>
          <p>Tell us about your thoughts on Plantopia!</p>
          <p class="contact-seg">Business Email: Plantopia@gmail.com</p>
          <p class="contact-seg">Contact Number: 123-456-7890</p>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Aboutus;