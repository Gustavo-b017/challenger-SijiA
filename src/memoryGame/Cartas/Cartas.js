import styled from 'styled-components';
import ContraCapa from '../Img/espaco.avif'


const Cartas = styled.div `
  position: relative;
`

const CartaFront = styled.img `
  width: 100%;
  object-fit: cover;
  display: block;
  border: 2px solid #fff;
  border-radius: 1rem;
`
const CartaBack = styled.img `
  width: 100%;
  display: block;
  object-fit: cover;
  border: 2px solid #fff;
  border-radius: 1rem;
`


export default function SoloCard({card, handleChoice}){
  
  const handleClick = () => {
    handleChoice(card)
  }
  
  return(
    <Cartas>
      <div> 
        <CartaFront src={card.src} />
        <CartaBack
          src={ContraCapa} 
          onClick={handleClick}
          alt='contra capa'
        />

      </div>
    </Cartas>
  );
}