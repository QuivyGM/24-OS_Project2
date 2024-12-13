import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { posts as importedPosts } from './data/posts'; // Import posts from external file
import { comments as importedComments } from './data/comments'; // Import comments from external file
import '../../styles/pages/_posts.scss';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { useAuth } from '../AuthContext';

const Post = () => {
    const { isLoggedIn } = useAuth(); // Access the isLoggedIn state    
    const { postId } = useParams(); // Retrieve the number (ID) from the URL
    const navigate = useNavigate(); // Initialize navigate function

    const [comments, setComments] = useState(importedComments); // Local state to manage comments
    const [newComment, setNewComment] = useState(''); // State to store new comment text

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    const handleCommentSubmit = (parentID) => {
        if (!isLoggedIn) {
            alert('You must be logged in to submit a comment.');
            navigate('/Login'); // Redirect to login page
            return;
        }
    
        if (newComment.trim()) {
            const newCommentObject = {
                id: comments.length > 0 ? comments[comments.length - 1].id + 1 : 1, // Increment ID
                parentID: parentID, // Link comment to the current post ID
                textBody: newComment, // User input
                time: new Date().toISOString(), // Current time
                author: 'GuestUser', // Temporary author (or replace with logged-in user)
                likes: 0 // Default likes
            };
    
            setComments([...comments, newCommentObject]); // Add to local state
            setNewComment(''); // Reset input field
    
            // Show the formatted new comment in an alert
            alert(`New Comment Submitted:\n${JSON.stringify(newCommentObject, null, 2)}`);
        } else {
            alert('Please write a comment before submitting.');
        }
    };

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
      };

    return (
        <div className="page container">
            <Navbar />

            {/* Display the post content */}
            <div className="post container">
                <button className="back-button" onClick={handleBackClick}>← Back</button>

                {importedPosts.map((post) => {
                    if (post.id === parseInt(postId)) {
                        // Dynamically filter comments for the current post
                        const filteredComments = comments.filter(
                            (comment) => comment.parentID === post.id
                        );

                        return (
                            <div key={post.id} className="card text-muted" style={{ padding: '20px' }}>
                                <h1>{post.title}</h1>
                                <div className="post-header">
                                    <p className="username">
                                        By: <strong>{post.author}</strong>
                                    </p>
                                    <p className="upload-time">
                                        Uploaded on: <strong>{new Date(post.uploadTime).toLocaleDateString()}</strong>
                                    </p>
                                </div>
                                {post.image && (
                                    <img src={post.image} alt={post.title} className="img-fluid mb-3" />
                                )}
                                <p>{post.content}</p>
                                <span className="post-likes">
                                    <strong>{post.likes}</strong> likes
                                </span>

                                {/* Write Comment Section */}
                                <div className="write-comment mt-4">
                                    <h3>Write a Comment</h3>
                                    <textarea
                                        placeholder="Write your comment here..."
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                        className="form-control mb-2"
                                        rows="3"
                                    ></textarea>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleCommentSubmit(post.id)}
                                    >
                                        Submit Comment
                                    </button>
                                </div>

                                {/* Comments Section */}
                                <div className="comments-section mt-4">
                                    <h3>Comments</h3>
                                    {filteredComments.length > 0 ? (
                                        <div className="row">
                                            {filteredComments.map((comment) => (
                                                <div key={comment.id} className="col-12 mb-3">
                                                    <div className="card comment-card p-3">
                                                        <p>
                                                            <strong>{comment.author}:</strong> {comment.textBody}
                                                        </p>
                                                        <span>
                                                            {getTimeDifference(comment.time)}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p>No comments yet.</p>
                                    )}
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>

            <Footer />
        </div>
    );
};

export default Post;
