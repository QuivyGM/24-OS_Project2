import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { posts as importedPosts } from '../data/posts'; // Import posts from external file
import '../styles/pages/_community.scss';

const Community = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('show-your-plant'); // Default active tab
  const searchInputRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const postsPerPage = 10; // Define how many posts per page
  const totalPosts = importedPosts.length; // Total number of posts

  // Calculate indices for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = importedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Set the clicked tab as active
  };

  const handleSearch = () => {
    if (searchInputRef.current) {
      console.log('Search:', searchInputRef.current.value);
    }
  };

  // Pagination navigation
  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalPosts / postsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleLogoClick = (event) => {
    event.preventDefault();
    navigate('/main');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleShopClick = () => {
    navigate('/shop');
  };

  const handlePlantsClick = () => {
    navigate('/plants');
  };

  const handleCommunityClick = () => {
    navigate('/community');
  };

  const handleAboutusClick = () => {
    navigate('/aboutus');
  };

  return (
    <div className="community-page container">
      {/* Navbar */}
      <div className="overlay">
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-main">
          <div className="container-fluid navbar-box d-flex">
            <a className="navbar-brand" href="#" onClick={() => navigate('/')}>
              <img src="./images/logo.png" alt="logo" />
            </a>
            <div className="collapse navbar-collapse nav-center" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="#plants">Plants</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#community">Community</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#shop">Shop</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#aboutus">About Us</a>
                </li>
              </ul>
              <div className="nav-right">
                <form className="d-flex search-button" role="search" onSubmit={(e) => e.preventDefault()}>
                  <input
                    ref={searchInputRef}
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="button" onClick={handleSearch}>
                    <img src="./icons/search-normal.svg" alt="search" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Forum Features */}
      <div className="forum-container">

      <h1 className="title-text">
                    Find Your <br />
                    Perfect Plant
                    <img src="/images/together.png" alt="Plant Icon" className="plant-icon" />
                </h1>


        {/* Ask Question Button */}
        <div className="ask-question-container">
          <button className="btn btn-success ask-question-button">Ask Question</button>
        </div>

        {/* Forum Header */}
        <div className="forum-header">
          <div className="sort-dropdown">
            <select
              className="form-select"
              onChange={(e) => console.log(`Selected: ${e.target.value}`)}
            >
              <option value="recent">Recent</option>
              <option value="likes">Likes</option>
              <option value="rising">Rising</option>
            </select>
          </div>

          <button
            className={`btn ${
              activeTab === 'show-your-plant' ? 'btn-success' : 'btn-outline-success'
            }`}
            onClick={() => handleTabClick('show-your-plant')}
          >
            Show Your Plant
          </button>
          <button
            className={`btn ${
              activeTab === 'q-and-a' ? 'btn-success' : 'btn-outline-success'
            }`}
            onClick={() => handleTabClick('q-and-a')}
          >
            Q & A
          </button>

          <div className="search-bar">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>

        {/* Post List */}
        <div className="post-list">
          {currentPosts.map((post) => (
            <div className="post-card card" key={post.id}>
              <div className="card-body">
                <div className="post-header">
                  <span className="post-author">{post.author}</span>
                  <span className="post-time">{post.time}</span>
                </div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-content">{post.content}</p>
                <div className="post-footer">
                  <span>{post.answers} answers</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            className="btn btn-light"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          <span>
            {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, totalPosts)} of {totalPosts}
          </span>
          <button
            className="btn btn-light"
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}
          >
            &gt;
          </button>
        </div>

        {/* Footer Section */}
        <footer className="footer py-5">
          <div className="row logo-links">
            <div className="col-md-3 footer-logo">
              <img src="./images/logo.png" alt="Plantopia Logo" onClick={handleLogoClick}/>
            </div>
            <div className="col-md-3 footer-links">
              <a className="nav-link active" onClick={handlePlantsClick} href='plants'>Plants</a>
              <a className="nav-link active" onClick={handleCommunityClick} href='community'>Community</a>
              <a className="nav-link active" onClick={handleShopClick} href='shop'>Shop</a>
              <a className="nav-link active" onClick={handleAboutusClick} href='aboutus'>About Us</a>
            </div>
          </div>
          <p className="footer-note text-center mt-4">Plantopia © All rights reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Community;
