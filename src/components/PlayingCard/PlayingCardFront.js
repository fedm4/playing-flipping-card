import React from 'react';
import PlayingCardTitleContent from './PlayingCardTitleContent';

import Crown from './Icons/crown.svg';

import './PlayingCardFront.css';

const PlayingCardFront = props => {
    return (
        <div className="playing-card-front">
            <div className="playing-card-front-container">
                <header className="playing-card-header">
                    <PlayingCardTitleContent flip={props.flip}></PlayingCardTitleContent>
                </header>
                <article className="playing-card-content">
                    <img src={Crown} alt="Queen"></img>
                </article>
                <footer className="playing-card-footer">
                    <PlayingCardTitleContent flip={props.flip}></PlayingCardTitleContent>
                </footer>
            </div>
        </div>
    );
};

export default PlayingCardFront;