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
                
                <Link to="/VirtualGarden" className="sb-text" style={{ top: '271px' }}>Virtual Garden</Link>
                <Link to="/MyPostsAndComments" className="sb-text" style={{ top: '315px' }}>My Posts & Comments</Link>
                <Link to="/MyAccount" className="sb-text" style={{ top: '359px' }}>My Account</Link>
                <Link to="/LogOut" className="sb-text" style={{ top: '403px' }}>Log Out</Link>
                {/* <Link to="/MyShopping" className="sb-text" style={{ top: '453px' }}>My Shopping</Link> */}
            </div>
        </div>
    );
};

export default Layout_seo;
