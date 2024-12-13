import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
            // POST request to API
            fetch('your-api-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,   // Use required format
                    body: content,  // Change "content" to "body"
                    tags: "#C++",   // Example static tag
                    user_id: 1      // Static user ID (replace dynamically if needed)
                }),
            })
                .then(res => res.json()) // Convert response to JSON
                .then(result => {
                    if (result.message === 'SUCCESS') {
                        alert('Post submitted successfully!');
                        // Add new post locally
                        setPosts([...posts, {
                            title: title,
                            body: content,
                            tags: "#C++",
                            user_id: 1
                        }]);
                        setTitle(''); // Reset title input
                        setContent(''); // Reset content input
                    } else {
                        alert('Failed to submit the post. Please check your input.');
                    }
                })
                .catch(error => {
                    console.error('Error submitting post:', error);
                    alert('An error occurred. Please try again.');
                });
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
