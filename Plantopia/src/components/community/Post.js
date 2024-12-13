import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { posts as importedPosts } from './data/posts'; // Import posts from external file
import { comments as importedComments } from './data/comments'; // Import comments from external file
import '../../styles/pages/_posts.scss';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Post = () => {    
    const { postId } = useParams(); // Retrieve the number (ID) from the URL
    const navigate = useNavigate(); // Initialize navigate function

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
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
      }

    return (
        <div className="page container">
            <Navbar />

            {/* Display the post content */}
            <div className="post container">
                <button className="back-button" onClick={handleBackClick}>← Back</button>

                {importedPosts.map((post) => {
                    if (post.id === parseInt(postId)) {
                        // Dynamically filter comments for the current post
                        const filteredComments = importedComments.filter(
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
                                                            {getTimeDifference(post.uploadTime)}
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
