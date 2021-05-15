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
        fetchRandomCard()
    }
 
    return (
        <div>
            <Header/>
            <div>
            { currentCard ? <CardInfo currentCard = {currentCard}/> : <p>Loading ...</p> }
                <aside>
                { currentCard ? <Card currentCard = {currentCard}/> : <p>Loading ...</p> }
                <ScryButton handleButtonClick = {handleButtonClick}/>
                </aside>
            </div>
        </div>
    )
}

export default CardContainer;