import React from 'react';

const ScryButton = ({handleButtonClick}) => {

    return (
        <div id = "scry-button">
            <button id = "scry-button" onClick = {handleButtonClick}> SCRY 1 </button>
        </div>
    )
}

export default ScryButton;