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
            // Create the data in the new format
            const newPost = {
                title: title,
                body: content,
                user_id: 1 // Temporary user ID
            };

            console.log('New Post Submitted:', newPost); // Log the new post structure

            // Send the data to the backend API
            fetch('http://localhost:8080/api/Posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPost), // Send data in the required format
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(`Error: ${res.status}`);
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log('Response from Backend:', data);
                    alert(`Post submitted successfully!\n\n` +
                          `Title: ${newPost.title}\n` +
                          `Body: ${newPost.body}\n` +
                          `User ID: ${newPost.user_id}`
                    );

                    // Update frontend state with the new post for display
                    setPosts([...posts, { id: data.id || posts.length + 1, ...newPost }]);
                })
                .catch((error) => {
                    console.error('Error submitting post:', error);
                    alert('Failed to submit the post. Please try again.');
                });

            // Reset input fields
            setTitle('');
            setContent('');
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
