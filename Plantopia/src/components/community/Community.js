import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { posts as importedPosts } from './data/posts'; // Import posts from external file
import '../../styles/pages/_community.scss';
import Footer from '../Footer';

const Community = () => {
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const [showInput, setShowInput] = useState(false);

  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const postsPerPage = 10; // Define how many posts per page
  const totalPosts = importedPosts.length; // Total number of posts

  // Calculate indices for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = importedPosts.slice(indexOfFirstPost, indexOfLastPost);

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

  // Function to show the search input when the search button is clicked
  const handleSearchClick = () => {
    setShowInput(true);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  // Text Animation
  const text = "Find Your Perfect Plant"; 
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, 50); 

    if (currentIndex === text.length) {
      clearInterval(interval); 
    }

    return () => clearInterval(interval);
  }, [currentIndex, text]);


  // Search functionality
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    alert(`Search Term: ${searchTerm}`);  //search input - 검색 입력값
    setSearchTerm('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // time calculate
  const getTimeDifference = (uploadTime) => {
    const uploadDate = new Date(uploadTime);
    const currentDate = new Date();
    const diffInSeconds = Math.floor((currentDate - uploadDate) / 1000);

    if (diffInSeconds < 3600) { // Less than 1 hour
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minutes ago`;
    } else if (diffInSeconds < 86400) { // Less than 1 day
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hours ago`;
    } else if (diffInSeconds < 2592000) { // Less than 1 month
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} days ago`;
    } else if (diffInSeconds < 31536000) { // Less than 1 year
      const months = Math.floor(diffInSeconds / 2592000);
      return `${months} months ago`;
    } else { // More than 1 year
      const years = Math.floor(diffInSeconds / 31536000);
      return `${years} years ago`;
    }
  }


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
                <li className="nav-item"><a className="nav-link active" href="Shop">Shop</a></li>
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
      <h1 className="search-animation">
        {displayedText}
        <span className="cursor"></span> {/* Qidiruv indikator */}
      </h1>

        {/* Forum Header */}
        <div className="forum-header">
          <div className="sort-dropdown">
            <select
              className="form-select"
              onChange={(e) => console.log(`Selected: ${e.target.value}`)}
            >
              <option value="recent">Recent</option>
              <option value="likes">Likes</option>
            </select>
          </div>

          <div className="search-bar">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
          </div>

          <button 
            className="btn btn-outline-secondary"
            onClick={() => navigate('/upload')}
          >
            +
          </button>
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
                    <span className="post-time">{getTimeDifference(post.uploadTime)}</span>
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
      <Footer />
    </div>
  );
};

export default Community;
