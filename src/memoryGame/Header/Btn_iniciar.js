import { useEffect, useState } from 'react';
import styled from 'styled-components';
import img_1 from '../Img/deboche.webp'
import img_2 from '../Img/exames-de-sangue.webp'
import img_3 from '../Img/shrek.jpg'
import img_4 from '../Img/tomografia.jpg'
import img_5 from '../Img/hemodialise.jpg'
import img_6 from '../Img/cachorro.jpg'
import SoloCard from '../Cartas/Cartas';

const Div_Cards = styled.div `
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
  { 'src' : img_1},
  { 'src' : img_2},
  { 'src' : img_3},
  { 'src' : img_4},
  { 'src' : img_5},
  { 'src' : img_6},
]

const PosicaoCartas = styled.div `
  margin: 40px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  width: 80%;
`

function BtnComecar() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const Embaralhar = () => {
    const EmbaralharCards = [ ...cardImg, ...cardImg]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(EmbaralharCards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // compara as duas cartas
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log('as duas cartas fazem par')
        resetTurn()
      }

      else {
        console.log('as cartas nao fazem par')
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])

  // retetar as jogadas e adicionar umais um turno
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTrurns => prevTrurns +1)
  }

  return (

    <Div_Cards>
      <Botao_header onClick={Embaralhar}>Novo jogo</Botao_header>

      <PosicaoCartas>
        {cards.map(card => (
          <SoloCard 
            key={card.id} 
            card={card}  
            handleChoice={handleChoice}
          />
        ))}
      </PosicaoCartas>
      
    </Div_Cards>
  );
}

export default BtnComecar;