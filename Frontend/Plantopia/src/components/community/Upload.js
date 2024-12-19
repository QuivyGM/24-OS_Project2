import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { posts as importedPosts } from './data/posts'; // Import posts from external file
import '../../styles/pages/_upload.scss';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { useAuth } from '../AuthContext';

const Upload = () => {
    const [title, setTitle] = useState('');
    //const [token, setToken] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate(); // Initialize navigate function

    const [postBody, setPostBody] = useState(''); // State for the post body input
    const [posts, setPosts] = useState([]); // State to manage posts

    // Navigate back to the previous page
    const handleBackClick = () => {
        navigate(-1);
    };

    // Handle form submission
    const handlePostSubmit = () => {
        if (title.trim() && postBody.trim()) {
            // Create the data in the new format
            let tokens = window.sessionStorage.getItem('t1');
            const newPost = {
                title: title,
                body: postBody,
                token : tokens // Temporary user ID
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

            // Reset input fields
            setTitle('');
            setPostBody('');
            navigate(-1);
        } else {
            alert('Please fill in both the title and post body before submitting.');
        }
    };

    return (
        <div className="upload-page container">
            <Navbar />

            {/* Upload Post Form */}
            <div className="upload container">
                <button className="back-button" onClick={handleBackClick}>
                    ← Back
                </button>

                <div className="card p-4">
                    <h1 className="post-title mb-4">Upload a New Post
                    <img src="/images/upload_icon.png" alt="Upload Icon" className="upload-icon" />
                    </h1>

                    {/* Form Fields */}
                    <div className="form-group mb-3">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            className="form-control"
                            placeholder="Enter post title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="postBody">Post Body</label>
                        <textarea
                            id="postBody"
                            className="form-control"
                            placeholder="Write your post here..."
                            rows="5"
                            value={postBody}
                            onChange={(e) => setPostBody(e.target.value)}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        className="submit-button btn btn-success w-100"
                        onClick={handlePostSubmit}
                    >
                        Submit Post
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Upload;
