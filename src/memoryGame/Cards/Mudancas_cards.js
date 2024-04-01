import { useState } from 'react';
import styled from 'styled-components';

const CardImg = [
  { 'src': '/src/memoryGame/Img/exames-de-sangue.webp'},
  { 'src': '/src/memoryGame/Img/fica_frio.jfif'},
  { 'src': '/src/memoryGame/Img/hemodialise.JPG'},
  { 'src': '/src/memoryGame/Img/hemodialise.JPG'},
  { 'src': '/src/memoryGame/Img/tomografia.jfif'}
]

const [cards, setCards] = useState([])
const [turns, setTurns] = useState(0)

const shuffleCards = () => {
  const shuffleCards = [...CardImg, ...CardImg]
  .sorf(() =>Math.randow() -0.5)
  .map((card) => ({...card, id: Math.random()}))

  setCards(shuffleCards)
  setTurns(0)
}

function App() {
  return (
    <div>
        
    </div>
  );
}

export default App;
