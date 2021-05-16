import React from 'react';

const CardInfo = ({currentCard}) => {

    return (
        <div id = "oracle-text">
            <h2>Set:</h2>
            <p>{currentCard.set_name}</p>
           
            <h2>Prices:</h2>
                <p>Mint: ${currentCard.prices.usd}</p>
                <p>Foil: ${currentCard.prices.usd_foil}</p>
                <p>Mint: €{currentCard.prices.eur}</p>
                <p>Foil: €{currentCard.prices.eur_foil}</p>
                <h2>Oracle Text: </h2>
                <p>{currentCard.oracle_text}</p>
        </div>
    )
}

export default CardInfo; 