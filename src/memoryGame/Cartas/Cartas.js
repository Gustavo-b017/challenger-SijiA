import styled from 'styled-components'
import ContraCapa from '../Img/espaco.jpg'


const Cartas = styled.div `
  position: relative;
`

const CartaFront = styled.img `
  width: 100%;
  height: 10rem;
  object-fit: cover;
  display: block;
  border: 2px solid #fff;
  border-radius: 1rem;
`
const CartaBack = styled.img `
  width: 100%;
  height: 10rem;
  display: block;
  object-fit: cover;
  border: 2px solid #fff;
  border-radius: 1rem;
`
const ContainerImg = styled.div `
  width: 1fr; 
`


export default function SoloCard({card, handleChoice}){
  
  const handleClick = () => {
    handleChoice(card)
  }
  
  return(
    <Cartas>
      <div>
        <ContainerImg>
          <CartaFront src={card.src} />
        </ContainerImg>
        
        <ContainerImg>
          <CartaBack
            src={ContraCapa} 
            onClick={handleClick}
            alt='contra capa'
          />
        </ContainerImg>
        
        

      </div>
    </Cartas>
  );
}