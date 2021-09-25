import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <a href="/shope">shope</a>
                <a href="/Order Review">Order Review</a>
                <a href="/Manage Inventory here">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;