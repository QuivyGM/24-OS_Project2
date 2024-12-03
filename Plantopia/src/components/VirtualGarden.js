import React from 'react';
import { useNavigate } from 'react-router-dom';

const VirtualGarden = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <img 
                src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/F1F2/production/_118283916_b19c5a1f-162b-410b-8169-f58f0d153752.jpg" 
                alt="This is fine meme" 
                style={{ maxWidth: '100%', height: 'auto' }}
            />
            <button onClick={handleBackClick} style={{ marginTop: '20px' }}>
                Back
            </button>
        </div>
    );
};

export default VirtualGarden;
