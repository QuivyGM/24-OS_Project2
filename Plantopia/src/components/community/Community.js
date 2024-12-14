import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { posts as importedPosts } from './data/posts'; // Import posts from external file
import '../../styles/pages/_community.scss';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { useAuth } from '../AuthContext';




const Community = () => {
  const { isLoggedIn } = useAuth(); // Get the login state

  //for linking
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const [showInput, setShowInput] = useState(false);

  // mark how many pages etc
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const postsPerPage = 10; // Define how many posts per page
  const totalPosts = importedPosts.length; // Total number of posts

  // Calculate indices for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = importedPosts.slice(indexOfFirstPost, indexOfLastPost);

  //for pcard click
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

  // Text Animation
  const text = "Meet your fellow gardeners!"; 
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
    //setSearchTerm('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleUploadClick = () => {
    if (!isLoggedIn) {
      alert('You must be logged in to upload a post.');
      navigate('/Login');
    } else {
      navigate('/upload');
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
      <Navbar />

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
            onClick={handleUploadClick}
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
                <div className="post-footer d-flex justify-content-between">
                  <span className="post-likes">
                      {post.likes} likes
                  </span>
                  <span className="post-answers">
                         {post.answers} answers
                  </span>
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
