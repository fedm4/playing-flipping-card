import React from 'react';
import './PlayingCardBack.css';

import PlayingCardBackBackground from './Icons/playingCardBackBackground.png';

const PlayingCardBack = props => {
    return (
        <div className="playing-card-back" onClick={props.flip}>
            <div className="playing-card-back-container">
                <img className="playing-card-back-background" src={PlayingCardBackBackground} />
            </div>
        </div>
    );
}

export default PlayingCardBack;