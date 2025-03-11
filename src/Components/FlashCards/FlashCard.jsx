/* eslint-disable react/prop-types */
import './FlashCards.css';

const FlashCard = ({ flashcards, currentIndex }) => {
    return (
        <div className="flashcard">
            {flashcards.length > 0 ? (
                flashcards[currentIndex]
            ) : (
                <p className="no-cards">No Cards Available</p>
            )}
        </div>
    );
};

export default FlashCard;