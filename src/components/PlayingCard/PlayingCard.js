import React, { useState } from 'react';
import PlayingCardFront from './PlayingCardFront';
import PlayingCardBack from './PlayingCardBack';
import './PlayingCard.css';

const PlayingCard = () => {
    const [flipClass, setFlipClass] = useState("");
    const toggleFlipClass = () =>{
        setFlipClass(flipClass == "" ? "flip-card" : "");
    }
    return (
        <section className="playing-card">
            <div className={ `playing-card-container ${flipClass}`}>
                <PlayingCardFront flip={toggleFlipClass}></PlayingCardFront>
                <PlayingCardBack flip={toggleFlipClass}></PlayingCardBack>
            </div>
        </section>
    );
};

export default PlayingCard;