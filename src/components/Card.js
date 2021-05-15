import React from 'react'

const Card = ({currentCard}) => { 

    return (
        <div id = "card-container">
            <img id = "card-image" src={currentCard.image_uris.normal} alt="card" />
        </div>
        
    
    )
}

export default Card;