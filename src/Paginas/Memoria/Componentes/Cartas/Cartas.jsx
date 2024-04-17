import ContraCapa from '../../Img/espaco.jpg'
import './Cartas.css'

export default function SoloCard({card, handleChoice, flipped, disabled}){
  
  const handleClick = () => {
    if (!disabled){
    handleChoice(card)
    }
  }
  
  return(
    <div className='card'>

      <div className={flipped ? "flipped" : ''}>
          
          <img className='front' src={card.src} />
        
          <img
            className='back'
            src={ContraCapa} 
            onClick={handleClick}
            alt='contra capa'
          />
      </div>
    </div>
  );
}