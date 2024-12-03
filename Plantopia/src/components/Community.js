import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { posts as importedPosts } from '../data/posts'; // Import posts from external file
import '../styles/pages/_community.scss';

const Community = () => {
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const [showInput, setShowInput] = useState(false);

  const [activeTab, setActiveTab] = useState('show-your-plant'); // Default active tab
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
  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`); // Navigate to the post page with postId
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

  const handlePlantsClick = () => {
    navigate('/plants');
  };

  const handleCommunityClick = () => {
    navigate('/community');
  };

  const handleAboutusClick = () => {
    navigate('/aboutus');
  };

  // Function to show the search input when the search button is clicked
  const handleSearchClick = () => {
    setShowInput(true);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <div className="community-page container">
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
            className={`btn ${activeTab === 'show-your-plant' ? 'btn-success' : 'btn-outline-success'}`}
            onClick={() => handleTabClick('show-your-plant')}
          >
            Show Your Plant
          </button>
          <button
            className={`btn ${activeTab === 'q-and-a' ? 'btn-success' : 'btn-outline-success'}`}
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
            <div
            className="post-card card"
            key={post.id}
            onClick={() => handlePostClick(post.id)} // Navigate on click
            style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
        >
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
  );
};

export default Community;
