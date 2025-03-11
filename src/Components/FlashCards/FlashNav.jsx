/* eslint-disable react/prop-types */
import './FlashCards.css';
import { useState } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { MdAddCard } from "react-icons/md";
import FlashButton from "./FlashButton";
import { Link } from "react-router-dom";

const FlashNav = ({ addFlashcard, prevCard, nextCard }) => {
    const [newCard, setNewCard] = useState("");
    const [showInput, setShowInput] = useState(false);

    return (
        <div className="flashcard-navbar">

            <Link to="/" className="logo-link">
                <h1>The Students App</h1>
            </Link>

            <div className="links">
                <FlashButton icon={<FaAnglesLeft />} text="Previous" onClick={prevCard} />
                <FlashButton icon={<MdAddCard />} text="Add Card" onClick={() => setShowInput(!showInput)} />
                <FlashButton icon={<FaAnglesRight />} text="Next" onClick={nextCard} />
            </div>

            {showInput && (
                <div className="absolute">
                    <input
                        type="text"
                        value={newCard}
                        onChange={(e) => setNewCard(e.target.value)}
                        placeholder="Enter new card"
                    />
                    <FlashButton
                        onClick={() => {
                            addFlashcard(newCard);
                            setNewCard("");
                            setShowInput(false);
                        }}
                        text="Add"
                        bgColor="bg-green-500"
                        textColor="text-white"
                    />
                </div>
            )}
        </div>
    );
};

export default FlashNav;