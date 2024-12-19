import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/_navbar.scss";
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const [showInput, setShowInput] = useState(false);

  const handleSearchClick = () => {
    setShowInput(true);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleMyPageClick = () => {
    if (window.sessionStorage.getItem('t1') == null) {
        navigate('/Login'); // Redirect to login page
    } else {
        navigate('/VirtualGarden'); // Navigate to My Page
    }
};

  return (
    <div className="overlay">
      <nav className="navbar navbar-expand-lg navbar-main">
        <div className="container-fluid navbar-box">
          <a
            className="navbar-brand"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/");
            }}
          >
            <img src="/images/logo.png" alt="logo" />
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

          {/* Navbar links */}
          <div className="collapse navbar-collapse nav-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/Plants">Plants</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Community">Community</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Shop">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Aboutus">About Us</a>
              </li>
            </ul>

            {/* Right nav (search and login) */}
            <div className="nav-right">
              <form
                className="d-flex search-button"
                role="search"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  ref={searchInputRef}
                  className={`form-control me-2 ${showInput ? "show" : "hide"}`}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                {/* <button
                  className="btn btn-outline-success"
                  type="button"
                  onClick={handleSearchClick}
                >
                  <img src="/icons/search-normal.svg" alt="search" />
                </button> */}
              </form>
              <button className="login-button"onClick={handleMyPageClick}>
                <img src="/icons/user.svg" alt="login" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;