import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src="/images/logo.svg" alt="Reading Buddy" />
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/flashcards">Flashcards</Link></li>
                        <li><Link to="/writing">Writing Practice</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;