import { useEffect, useState } from 'react'
import styled from 'styled-components'
import img_1 from '../Img/deboche.webp'
import img_2 from '../Img/exames-de-sangue.webp'
import img_3 from '../Img/shrek.jpg'
import img_4 from '../Img/tomografia.jpg'
import img_5 from '../Img/hemodialise.jpg'
import img_6 from '../Img/cachorro.jpg'
import SoloCard from './Cartas/Cartas'




const Div_Cards = styled.section `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Botao_header = styled.button `
  background: none;
  border: 2px solid #fff;
  margin: 10px 0;
  padding: 6px 12px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;

  &:hover{
    background-color: #5fe36a;
    color: #c83989;
  }
`

const cardImg = [
  { 'src' : img_1, matched: false},
  { 'src' : img_2, matched: false},
  { 'src' : img_3, matched: false},
  { 'src' : img_4, matched: false},
  { 'src' : img_5, matched: false},
  { 'src' : img_6, matched: false}
]

const PosicaoCartas = styled.div `
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  width: 100%;

  @media screen and (max-width: 800px){
    grid-template-columns: repeat(2, 1fr);
  }
`

const P_jogadas = styled.p `
  font-size: 2rem;
  color: #5fe36a;
`

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
    <Div_Cards>
      
      <Botao_header onClick={Embaralhar}> Novo jogo </Botao_header>

      <PosicaoCartas>
        {cards.map(card => (
          <SoloCard 
            key={card.id} 
            card={card}  
            handleChoice={handleChoice}
            flipped = {card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </PosicaoCartas>
      
      <P_jogadas>Número de jogadas: {turns} </P_jogadas>
    </Div_Cards>
  );
}