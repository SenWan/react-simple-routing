import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            {/* we can use link or anchor tag if we will use link the page will not be reloaded */}
            <nav className='navbar'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to='friend'>Friend</CustomLink>
                <CustomLink to="about">About</CustomLink>
            </nav>
            <h1>Welcome To My Routing Website</h1>
        </div>
    );
};

export default Header;