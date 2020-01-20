import React from 'react';
import Spades from './Icons/ace-of-spades.svg';

import './PlayingCardTitleContent.css';

const PlayingCardTitleContent = props => {
    return (
        <div className="playing-card-title-content">
            <span className="playing-card-title-content-value">Q</span>
            <h1 className="playing-card-title-content-title">Queen of Spades</h1>
            <div onClick={props.flip} className="playing-card-title-content-image-container">
                <img className="playing-card-title-content-image" src={Spades} />
            </div>
        </div>
    );
};

export default PlayingCardTitleContent;
