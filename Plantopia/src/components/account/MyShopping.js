import React, { useState } from 'react';
import '../../styles/pages/_mpac-ms.scss';
import '../../styles/pages/_footer.scss';
import Layout_seo from './Layout_seo.js';
import Navbar from '../Navbar';
import Footer from '../Footer';

const MyPostsAndComments = () => {
    return (
        <div className="mpac-ms-big-container">
        <Navbar />
        <div className="mpac-ms-small-container">
        <div style={{ backgroundColor: 'white', minHeight: '100vh' }}><Layout_seo />
        <div className="topline" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <div className="green-text">My Shopping</div>

            {/* 포스트 타이틀, 카운트 */}
            <div className="mp-ms-title-container" style={{ top: '25px' }}>
                <div className="mp-ms-title">My Shopping</div>
                <div className="mp-ms-count">3</div>
            </div>

            {/* 댓글 타이틀, 카운트 */}
            <div className="mp-ms-title-container" style={{ top: '377px' }}>
                <div className="mp-ms-title">My Wishlist</div>
                <div className="mp-ms-count">2</div>
            </div>

            {/* 포스트 내용 */}
            <div className="mp-ms-container" style={{ top: '57px' }}>게시글 링크 출력</div>

            {/* 댓글 내용 */}
            <div className="mp-ms-container" style={{ top: '440px' }}>댓글 출력</div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default MyPostsAndComments;
