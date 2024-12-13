import React from 'react';
import "../styles/pages/_footer.scss";

const Footer = () => {
  const handleLogoClick = () => {
    console.log('Logo clicked');
  };

  const handlePlantsClick = () => {
    console.log('Plants clicked');
  };

  const handleCommunityClick = () => {
    console.log('Community clicked');
  };

  const handleShopClick = () => {
    console.log('Shop clicked');
  };

  const handleAboutUsClick = () => {
    console.log('About Us clicked');
  };

return (
    <footer className="footer py-5">
      <div className="row logo-links">
        <div className="col-md-3 footer-logo">
          <img src="./images/logo.png" alt="Plantopia Logo" onClick={handleLogoClick} />
        </div>
        <div className="col-md-3 footer-links">
          <a className="nav-link active" onClick={handlePlantsClick} href="plants">
            Plants
          </a>
          <a className="nav-link active" onClick={handleCommunityClick} href="community">
            Community
          </a>
          <a className="nav-link active" onClick={handleShopClick} href="shop">
            Shop
          </a>
          <a className="nav-link active" onClick={handleAboutUsClick} href="aboutus">
            About Us
          </a>
        </div>
      </div>
      <p className="footer-note text-center mt-4">Plantopia © All rights reserved</p>
    </footer>
  );
};

export default Footer;