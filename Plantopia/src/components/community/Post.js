import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Post = () => {
    const { postId } = useParams(); // Retrieve the number (ID) from the URL
    const navigate = useNavigate(); // Initialize navigate function

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>This is fine meme</h1>
            <p>Post ID: {postId}</p>
            <img 
                src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-b7c50c845a78f5d7716475a92016d52655ba3115.jpg?s=1100&c=85&f=jpeg" 
                alt="This is fine meme" 
                style={{ maxWidth: '100%', height: 'auto' }}
            />
            <div style={{ marginTop: '20px', fontSize: '72px', fontWeight: 'bold' }}>
                {postId}
            </div>
            <button 
                onClick={handleBackClick} 
                style={{
                    marginTop: '30px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Go Back
            </button>
        </div>
    );
};

export default Post;

