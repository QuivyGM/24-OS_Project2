import React, { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { posts as importedPosts } from './data/posts'; // Import posts from external file
import '../../styles/pages/_posts.scss';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Post = () => {    
    const { postId } = useParams(); // Retrieve the number (ID) from the URL
    const navigate = useNavigate(); // Initialize navigate function

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <div className="card-page container">
            <Navbar/>

            {/* Display the post content */}
            <div className="card container">
                
                {importedPosts.map((post) => {
                    if (post.id === parseInt(postId)) {
                        return (
                            <div key={post.id} className="card">
                                <h1>{post.title}</h1>
                                <div className="post-header">
                                    <p className="username">By: {post.author}</p>
                                    <p className="upload-time">Uploaded on: {post.uploadTime}</p>
                                </div>
                                {post.image && <img src={post.image} alt={post.title} />}
                                <p>{post.content}</p>
                            </div>
                        );
                    }
                    return null;
                })}
                <button onClick={handleBackClick}>Go Back</button>
            </div>
            <Footer />
        </div>
    );
};

export default Post;

