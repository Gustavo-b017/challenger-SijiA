import ContraCapa from '../Img/contra-capa.svg'
import './css/memoria.css';
import './css/jogos.css'

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