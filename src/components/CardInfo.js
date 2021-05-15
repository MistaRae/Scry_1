import React from 'react';

const CardInfo = ({currentCard}) => {

    return (
        <div>
            <h2>Oracle Text: </h2>
                <p>{currentCard.oracle_text}</p>
        </div>
    )
}

export default CardInfo; 