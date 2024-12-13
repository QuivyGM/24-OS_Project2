import React, { useState } from 'react';
import { posts as importedPosts } from './data/posts'; // Import posts from external file
import '../../styles/pages/_posts.scss';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Post = () => {
    const [posts, setPosts] = useState(importedPosts); // State to manage posts
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handlePostSubmit = () => {
        if (title.trim() && content.trim()) {
            const newPost = {
                id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1, // Increment ID
                author: 'GuestUser', // Temporary nickname
                uploadTime: new Date().toISOString(), // Current time
                title: title,
                content: content,
                likes: 0, // Reset to 0
                answers: 0 // Reset to 0
            };

            console.log('New Post Submitted:', newPost); // Log the new post structure
            setPosts([...posts, newPost]); // Add the new post to the list
            setTitle(''); // Reset title input
            setContent(''); // Reset content input
            alert('Post submitted successfully!');
        } else {
            alert('Please enter both a title and content.');
        }
    };

    return (
        <div className="page container">
            <Navbar />

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

            <Footer />
        </div>
    );
};

export default Post;
