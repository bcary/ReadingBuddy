import React, { useState } from 'react';
import '../styles/game.css';

interface WordCard {
    word: string;
    image: string;
}

const FlashcardGame: React.FC = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const wordCards: WordCard[] = [
        { 'word': 'frog', 'image': '/images/frog.png' },
        { 'word': 'sun', 'image': '/images/sun.png' },
        { 'word': 'book', 'image': '/images/book.png' },
        { 'word': 'ball', 'image': '/images/ball.png' },
        { 'word': 'cup', 'image': '/images/cup.png' },
        { 'word': 'bear', 'image': '/images/bear.png' },
        { 'word': 'hat', 'image': '/images/hat.png' },
        { 'word': 'horse', 'image': '/images/horse.png' },
        { 'word': 'pig', 'image': '/images/pig.png' },
        { 'word': 'cow', 'image': '/images/cow.png' },
        { 'word': 'dog', 'image': '/images/dog.png' },
        { 'word': 'bird', 'image': '/images/bird.png' },
        { 'word': 'fish', 'image': '/images/fish.png' },
        { 'word': 'duck', 'image': '/images/duck.png' },
        { 'word': 'cat', 'image': '/images/cat.png' },
        { 'word': 'door', 'image': '/images/door.png' },
        { 'word': 'milk', 'image': '/images/milk.png' },
        { 'word': 'toy', 'image': '/images/toy.png' },
        { 'word': 'chair', 'image': '/images/chair.png' },
        { 'word': 'box', 'image': '/images/box.png' },
        { 'word': 'shoe', 'image': '/images/shoe.png' },
        { 'word': 'clock', 'image': '/images/clock.png' },
        { 'word': 'bed', 'image': '/images/bed.png' },
        { 'word': 'car', 'image': '/images/car.png' }
      ];

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    const handleNextCard = () => {
        setIsFlipped(false);
        setCurrentCardIndex((prevIndex) => {
            let nextIndex = Math.floor(Math.random() * wordCards.length);
            // Ensure we don't get the same word twice in a row
            while (nextIndex === prevIndex) {
                nextIndex = Math.floor(Math.random() * wordCards.length);
            }
            return nextIndex;
        });
    };

    return (
        <div className="game-container">
            <h2>Reading Buddy Game</h2>
            <p>Click the card to see the picture!</p>
            
            <div 
                className={`flashcard ${isFlipped ? 'flipped' : ''}`} 
                onClick={handleCardClick}
            >
                <div className="flashcard-inner">
                    <div className="flashcard-front">
                        <h1>{wordCards[currentCardIndex].word}</h1>
                    </div>
                    <div className="flashcard-back">
                        <img 
                            src={wordCards[currentCardIndex].image} 
                            alt={wordCards[currentCardIndex].word}
                        />
                    </div>
                </div>
            </div>

            <button onClick={handleNextCard} className="next-button">
                Next Word
            </button>
        </div>
    );
};

export default FlashcardGame;