import './css/jogos.css';
import LogicaMemoria from './LogicaMemoria';
import bannerHemo from '../Img/banner_memoria/banner-hemograma.png'
import icon_hemograma from '../../Public/icons/hemoglobina.svg'


function MemoriaHemodialize() {
  return (
    <main className='mainMemoria'>
      <div className="banner-jogo">
        <div className="titulo-jogo">
          <img src={bannerHemo} className='img-fluid'  alt="Hemograma"/>
        </div>
        <div className="icon-jogo">
          <img src={icon_hemograma} className='img-fluid' alt="icon hemograma" />
        </div>
      </div>
  
      <div className="jogoMemoria">
      <div className='tituloMemoria'>» Vire as cartas para encontrar os pares correlacionados «</div>
        <LogicaMemoria/>
      </div>
    </main>
  );
}

export default MemoriaHemodialize;