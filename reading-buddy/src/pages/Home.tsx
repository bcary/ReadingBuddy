import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to Reading Buddy!</h1>
            <p>Choose a game to start learning:</p>
            
            <div className="game-options">
                <Link to="/flashcards" className="game-option">
                    <h2>Flashcards</h2>
                    <p>Learn words with pictures</p>
                </Link>
                
                <Link to="/writing" className="game-option">
                    <h2>Writing Practice</h2>
                    <p>Learn to write letters</p>
                </Link>
            </div>
        </div>
    );
};

export default Home;