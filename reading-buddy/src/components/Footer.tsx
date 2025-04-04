import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <p>&copy; {new Date().getFullYear()} Reading Buddy. All rights reserved.</p>
            <p>
                <a href="/about">About</a> | <a href="/contact">Contact</a>
            </p>
        </footer>
    );
};

export default Footer;