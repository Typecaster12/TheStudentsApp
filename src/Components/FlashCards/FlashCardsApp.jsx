import './FlashCards.css';

import { useState } from "react";
import FlashNav from './FlashNav';
import FlashCard from './FlashCard';

const FlashCardsApp = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [currentCard, setCurrentCard] = useState(0);

    const prevCard = () => {
        setCurrentCard((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const nextCard = () => {
        setCurrentCard((prev) => (prev < flashcards.length - 1 ? prev + 1 : prev));
    };

    const addFlashcard = (card) => {
        if (card.trim() === "") return;
        setFlashcards([...flashcards, card]);
        setCurrentCard(flashcards.length);
    };

    return (
        <div className="app-container">
            <FlashNav addFlashcard={addFlashcard} prevCard={prevCard} nextCard={nextCard} />
            <div className="flashcard-wrapper">
                <FlashCard flashcards={flashcards} currentIndex={currentCard} />
            </div>
        </div>
    );
};

export default FlashCardsApp;
