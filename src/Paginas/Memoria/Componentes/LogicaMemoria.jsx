import { useEffect, useState } from 'react'
import img_1 from '../Img/deboche.webp'
import img_2 from '../Img/exames-de-sangue.webp'
import img_3 from '../Img/shrek.jpg'
import img_4 from '../Img/tomografia.jpg'
import img_5 from '../Img/hemodialise.jpg'
import img_6 from '../Img/cachorro.jpg'
import SoloCard from './Cartas'
import './memoria.css'

const cardImg = [
  { 'src' : img_1, matched: false},
  { 'src' : img_2, matched: false},
  { 'src' : img_3, matched: false},
  { 'src' : img_4, matched: false},
  { 'src' : img_5, matched: false},
  { 'src' : img_6, matched: false}
]

export default function LogicaMemoria() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const Embaralhar = () => {
    const EmbaralharCards = [ ...cardImg, ...cardImg]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(EmbaralharCards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // compara as duas cartas
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            }

            else {
              return card
            }
          })
        })
        resetTurn()
      }
      else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards)

  // retetar as jogadas e adicionar umais um turno
  const resetTurn = () => {
    
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTrurns => prevTrurns +1)
    setDisabled(false)
  }

  // comecar jogo automaticamente
  useEffect(() => {
    Embaralhar()
  }, [])

  return (
    <section className='sectionMemoriaHemodialize'>
      
      <button className='buttonMemoriaIniciar' onClick={Embaralhar}> Novo jogo </button>

      <div className='divCartasMemoria'>
        {cards.map(card => (
          <SoloCard 
            key={card.id} 
            card={card}  
            handleChoice={handleChoice}
            flipped = {card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      
      <p className='pJogadas' >Número de jogadas: {turns} </p>
    </section>
  );
}