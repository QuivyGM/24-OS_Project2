import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { posts as importedPosts } from './data/posts'; // Import posts from external file
import '../../styles/pages/_posts.scss';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Post = () => {
    const [posts, setPosts] = useState(importedPosts); // State to manage posts
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate(); // Initialize navigate function

    const handlePostSubmit = () => {
        if (title.trim() && content.trim()) {
            const newPost = {
                title: title, // Set title
                body: content, // Use 'body' instead of 'content'
                tags: "#C++", // Example static tag (replace dynamically if needed)
                user_id: 1 // Static user ID (can be replaced dynamically)
            };
    
            console.log('New Post Submitted:', newPost); // Log the new post structure
            setPosts([...posts, newPost]); // Add the new post to the list
            setTitle(''); // Reset title input
            setContent(''); // Reset content input
    
            // Alert with formatted data
            alert(
                `Post submitted successfully!\n\n` +
                `Title: ${newPost.title}\n` +
                `Body: ${newPost.body}\n` +
                `Tags: ${newPost.tags}\n` +
                `User ID: ${newPost.user_id}`
            );
        } else {
            alert('Please enter both a title and content.');
        }
    };
    

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <div className="page container">
            <Navbar />

            <div className="post container">
                <button className="back-button" onClick={handleBackClick}>← Back</button>

                {/* Input Form for New Post */}
                <div className="new-post-form mt-4">
                    <h3>Create a New Post</h3>
                    <input
                        type="text"
                        placeholder="Enter title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control mb-2"
                    />
                    <textarea
                        placeholder="Enter content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="form-control mb-2"
                        rows="4"
                    ></textarea>
                    <button className="btn btn-primary" onClick={handlePostSubmit}>
                        Submit Post
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Post;
