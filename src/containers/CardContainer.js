import React, {useState} from 'react'
import Header from '../components/header'
import Card from '../components/Card'
import { useEffect } from 'react'
import ScryButton from '../components/ScryButton'
import CardInfo from '../components/CardInfo'

const CardContainer = () => {

    const [currentCard, setCurrentCard] = useState(null)

    useEffect(() => {
        fetchRandomCard()
    }, [])

    const fetchRandomCard = () => {
        fetch('https://api.scryfall.com/cards/random')
        .then(response => response.json())
        .then(data => setCurrentCard(data))
    }

    const handleButtonClick = () => {
        // fetchRandomCard()
    }
 
    return (
        <div>
            <Header/>
            { currentCard ? <p>Loading ...</p> : <CardInfo currentCard = {currentCard}/> }
            { currentCard ? <p>Loading ...</p> : <Card currentCard = {currentCard}/> }
            <ScryButton handleButtonClick = {handleButtonClick}/>
        </div>
    )
}

export default CardContainer;