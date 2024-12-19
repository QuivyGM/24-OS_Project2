import React, { useState, useEffect } from 'react';
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

    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([]);


    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    const handleCommentSubmit = (parentID) => {
        if (window.sessionStorage.getItem('t1') == null) {
            alert('You must be logged in to submit a comment.');
            navigate('/Login'); // Redirect to login page
            return;
        } else {
            if (newComment.trim()) {
                let tokens = window.sessionStorage.getItem('t1');
                fetch('http://localhost:8080/api/Comments', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        body : newComment,
                        token : tokens,
                        post_id : parentID
                    }),
                })
                    .then((res) => res.json())
                    
                alert(`New Comment Submitted:\n`);
                
            } else {
                alert('Please write a comment before submitting.');
            }
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

      const handlePostLike = (id) => {
        let tokens = window.sessionStorage.getItem('t1');
        if(tokens != null) {
            fetch('http://localhost:8080/api/Postgoods', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token : tokens,
                    post_id : id
                }),
            })
                .then((res) => res.json())
        
    alert('You liked this post!'); // Temporary alert
        }
                
      }

    //   const handleCommentLike = () => {
    //     alert('You liked this comment!'); // Temporary alert
    //   }

      useEffect(() => {
                fetch('http://localhost:8080/Posts')
                  .then((res) => res.json())
                  .then((res) => {
                    setPost(res);
                    
                  });
                  
                  fetch('http://localhost:8080/Comments')
                  .then((res) => res.json())
                  .then((res) => {
                    setComment(res);
                    
                  });
                  
              },[]);
            function checkparentid(comment, pid) {
                    if(comment.parentID == parseInt(pid)) {
                        return (
                            <div key={comment.id} className="col-12 mb-3">
                            <div className="card comment-card p-3">
                            <span>by    <strong className="comment-username">{comment.author}</strong> <span className="comment-time">{getTimeDifference(comment.time)}</span></span>
                            <p className="comment-text">{comment.textBody}</p>
                            {/* <button className="comment-like-button"
                                onClick={handleCommentLike}>
                                <strong>&hearts;</strong> {comment.likes}
                            </button> */}
                            </div>
                            </div>
                        )
                    }
            }

    return (
        <div className="post-page container">
            <Navbar />
            {/* Display the post content */}
            <div className="post container">
                <button className="back-button" onClick={handleBackClick}>← Back</button>

                {post.map((post) => {
                    if (post.id === parseInt(postId)) {
                        // Dynamically filter comments for the current post
                        const filteredComments = comments.filter(
                            (comment) => comment.parentID === post.id
                        );

                        return (
                            <div key={post.id} className="card text-muted" style={{ padding: '20px' }}>
                                <h1 className='post-title'>{post.title}</h1>
                                <div className="post-header">
                                    <p className="username">
                                        By: <strong>{post.username}</strong>
                                    </p>
                                    <p className="upload-time">
                                        Uploaded on: <strong>{new Date(post.time).toLocaleDateString()}</strong>
                                    </p>
                                </div>
                                {/* {post.image && (
                                    <img src={post.image} alt={post.title} className="img-fluid mb-3" />
                                )} */}
                                <p>{post.contents}</p>
                                <button
                                    className="post-like-button"
                                    onClick={() => handlePostLike(post.id)}
                                >
                                    <strong>&hearts;</strong> {post.likes} likes
                                </button>

                                <hr style={{ margin: '40px 0', border: 'none', height: '2.5px', backgroundColor: '#ccc' }} />

                                {/* Comments Section */}
                                <div className="comments-section mt-4">
                                    <h3>Comments</h3>
                                    {comment.length > 0 ? (
                                        <div className="row">
                                            {comment.map((comment) => (
                                                    checkparentid(comment, post.id)
                                            ))}
                                        </div>
                                    ) : (
                                        <p>No comments yet.</p>
                                    )}
                                </div>

                                <hr style={{ margin: '40px 0', border: 'none', height: '2.5px', backgroundColor: '#ccc' }} />

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
                                        className="comment-submit-button"
                                        onClick={() => handleCommentSubmit(post.id)}
                                    >
                                        <strong>&#9998;</strong> Submit
                                    </button>

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