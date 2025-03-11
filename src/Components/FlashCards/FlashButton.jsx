/* eslint-disable react/prop-types */
import './FlashCards.css';

const FlashButton = ({ icon, text, onClick }) => {
    return (
        <div className="btn-container" onClick={onClick}>
            <span className="btn-icon">{icon}</span>
            <span className="btn-text">{text}</span>
        </div>
    );
};

export default FlashButton;