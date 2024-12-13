import React, { useState } from 'react';
import '../../styles/pages/_mpac-ms.scss';
import Layout_seo from './Layout_seo.js';

const MyPostsAndComments = () => {
    return (
        <div style={{ backgroundColor: 'white', minHeight: '100vh' }}><Layout_seo />
        <div className="topline" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <div className="green-text">My Posts & Comments</div>

            <div className="mp-ms-title-container" style={{ top: '26px' }}>
                <div className="mp-ms-title">My Posts</div>
                {/* My Comments의 count */}
                <div className="mp-ms-count">3</div>
            </div>

            <div className="mp-ms-title-container" style={{ top: '381px' }}>
                <div className="mp-ms-title">My Comments</div>
                {/* My Comments의 count */}
                <div className="mp-ms-count">2</div>
            </div>

            {/* My Posts */}
            <div className="mp-ms-container" style={{ top: '57px' }}>게시글 링크 출력</div>

            {/* My Comments */}
            <div className="mp-ms-container" style={{ top: '440px' }}>댓글 출력</div>
            </div> 
        </div>
    );
};

export default MyPostsAndComments;
