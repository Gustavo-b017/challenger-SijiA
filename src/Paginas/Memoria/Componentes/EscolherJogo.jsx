import { Link } from "react-router-dom";
import './css/escolher-jogo.css';

import banner_memoria from '../Img/banner_memoria/banner-memoria.svg'
import icon_memoria from '../Img/banner_memoria/icons-jg-memoria.gif'

import hemoglobina from '../../Public/icons/hemoglobina.svg'
import coracao from '../../Public/icons/coracao.svg'
import raioX from '../../Public/icons/raioX.svg'
import atencao from '../Img/atencao.png'

function EscolherJogo() {
  return (

    <div className="memoria-inicio">
      <div className="banner-memoria">
        <div className="titulo-memoria">
          <img src={banner_memoria} id="img-titulo" alt="Título jogo da memória"/>
        </div>
        <div className="jogo-memoria">
          <img src={icon_memoria} id="img-giff" alt="jogo da memória - gif" />
        </div>
      </div>

      <div className="temas">
        <h1>Escolha o tema que deseja jogar:</h1>
        <span className='info'><img src={atencao} className="imgInfo" alt="atenção"/> 
          <span>   Em futuras atualizações, as imagens do jogo serão devidamente separadas por temas</span>
        </span>
        <div className="memoriaEscolherDivBtn">

            <button className="memoriaEscolherBtn">
              <Link to="Hemodialize"> 
                <img className="memoriaEscolherBtnImg img-fluid" src={hemoglobina} alt="" />
                <p className="memoriaBtnP">HEMOGRAMA</p> 
              </Link>
            </button>

            <button className="memoriaEscolherBtn">
              <Link to="Hemodialize"> 
                <img className="memoriaEscolherBtnImg " src={coracao} alt="" />
                <p className="memoriaBtnP">ELETROCARDIOGRAMA</p> 
              </Link>
            </button>
    
            <button className="memoriaEscolherBtn">
              <Link to="Hemodialize"> 
                <img className="memoriaEscolherBtnImg" src={raioX} alt="" />
                <p className="memoriaBtnP">RAIO-X</p> 
              </Link>
            </button>
        </div>
      </div>
    </div>
  );
}

export default EscolherJogo;