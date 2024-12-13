import React, { useState } from 'react';
import '../../styles/pages/_myaccount.scss';
import Layout_seo from './Layout_seo.js';
import Navbar from '../Navbar';
import Footer from '../Footer';

const MyAccount = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    
    const handleCurrentPasswordChange = (e) => {
        setCurrentPassword(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    }

    const handleKeyDown = (e, type) => {
        if(e.key == 'Enter') {
            if (type == 'current') {
                console.log('Current Password:', currentPassword); // 값 저장 처리
            } else if (type == 'new') {
                console.log('New Password:', newPassword); // 값 저장 처리
            }
        }
    };
    
    return (
        <div className="ma-big-container">
        <Navbar />

        <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
        <Layout_seo />
        <div className="topline" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <div className="green-text">My Account</div>
            <div className="ma-container">
                <img className="ma-user-img" alt="User Image" src="/images/woowangi-user-image.png"/>
                <div className="ma-pic-circle">
                    <img className="ma-pic-icon" alt="Icon" src="/icons/pic-icon.png"/>
                </div>
                <div className="ma-delete-text">Delete Your Picture</div>

                <div className="ma-menu-text" style={{ top: '267px'}} >E-mail</div>
                <div className="ma-content-container" style={{ top: '288px' }}>abc@gmail.com</div>

                <div className="ma-menu-text" style={{ top: '339px'}} >Nickname</div>
                <div className="ma-content-container" style={{ top: '360px' }}>Woowangi</div>

                {/* 현재 비밀번호 입력 */}
                <div className="ma-content-container" style={{ top: '432px' }}>
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={handleCurrentPasswordChange}
                        onKeyDown={(e) => handleKeyDown(e, 'current')}
                        placeholder="Enter"
                    />
                </div>
                <div className="ma-menu-text" style={{ top: '411px'}} >Current Password</div>

                <div className="ma-green-text">Enter Your Full Password To Change It</div>

                {/* 새로운 비밀번호 입력 */}
                <div className="ma-content-container" style={{ top: '524px' }}>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        onKeyDown={(e) => handleKeyDown(e, 'new')}
                        placeholder="Enter"
                    />
                </div>
                <div className="ma-menu-text" style={{ top: '503px'}} >New Password</div>

                <div className="ma-save-button">save</div>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default MyAccount;
