import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/_layout_seo.scss';

const Layout_seo = () => {
    return (
        <div className="topline">
            <div className="sb-container">
                <img className="sb-user-img" alt="User Image" src="/images/woowangi-user-image.png"/>
                <div className="sb-user-name">Woowangi</div>
                <div className="sb-line"></div>
                
                <Link to="/VirtualGarden" className="sb-text" style={{ top: '281px' }}>Virtual Garden</Link>
                <Link to="/MyPostsAndComments" className="sb-text" style={{ top: '324px' }}>My Posts & Comments</Link>
                <Link to="/MyShopping" className="sb-text" style={{ top: '367px' }}>My Shopping</Link>
                <Link to="/MyAccount" className="sb-text" style={{ top: '410px' }}>My Account</Link>
                <Link to="/LogOut" className="sb-text" style={{ top: '453px' }}>Log Out</Link>
            </div>
        </div>
    );
};

export default Layout_seo;
