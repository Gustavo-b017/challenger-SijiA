import { useState } from 'react';
import styled from 'styled-components';


const Div_header = styled.div `
  min-height: 50vh;
  margin: 30px auto ;
  align-items: center;
  display: flex;
  flex-direction: column;
`

const H1_header = styled.div `
  font-size: 2.2rem;  
  font-weight: 700;
  color: #5fe36a;
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
  { 'src': '/src/memoryGame/Img/exames-de-sangue.webp'},
  { 'src': '/src/memoryGame/Img/fica_frio.jfif'},
  { 'src': '/src/memoryGame/Img/hemodialise.JPG'},
  { 'src': '/src/memoryGame/Img/lets-go.jfif'},
  { 'src': '/src/memoryGame/Img/tomografia.jfif'}
]



function Comecar() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const shuffleCards = () => {
    const shuffleCards = [ ...cardImg, ...cardImg]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffleCards)
    setTurns(0)
  }

  console.log(cards, turns)

  return (
    <Div_header>
      <H1_header>Vai que é tua!</H1_header>
      <Botao_header onClick={shuffleCards}>Novo jogo</Botao_header>
    </Div_header>
  );
}

export default Comecar;