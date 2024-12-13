import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Upload = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [body, setBody] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const uploadTime = new Date().toISOString();
        const formData = {
            title,
            image,
            body,
            username,
            uploadTime
        };
        console.log(formData);
        // Here you can add the code to save the formData to your backend or state management
    };

    return (
        <div>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Image:</label>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
                </div>
                <div>
                    <label>Text Body:</label>
                    <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Upload;


