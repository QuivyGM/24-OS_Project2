import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/pages/_upload.scss';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { useAuth } from '../AuthContext';

const UploadPost = () => {
    const { isLoggedIn } = useAuth(); // Check if user is logged in
    const navigate = useNavigate(); // Navigation function

    const [title, setTitle] = useState(''); // State for the title input
    const [postBody, setPostBody] = useState(''); // State for the post body input
    const [posts, setPosts] = useState([]); // State to manage posts

    // Navigate back to the previous page
    const handleBackClick = () => {
        navigate(-1);
    };

    // Handle form submission
    const handlePostSubmit = () => {
        if (!isLoggedIn) {
            alert('You must be logged in to upload a post.');
            navigate('/Login');
            return;
        }

        if (title.trim() && postBody.trim()) {
            const newPost = {
                id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
                title,
                content: postBody,
                author: 'GuestUser', // Temporary placeholder
                uploadTime: new Date().toISOString(),
                likes: 0,
            };

            setPosts([...posts, newPost]); // Update posts state
            setTitle('');
            setPostBody('');

            alert('Post uploaded successfully!');
            console.log('New Post Uploaded:', newPost);
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

export default UploadPost;
