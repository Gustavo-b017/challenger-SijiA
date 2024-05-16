import { Link } from "react-router-dom";
import './css/escolher-jogo.css';

import banner_memoria from '../Img/inicio/banner-memoria.svg'
import icon_memoria from '../Img/inicio/icons-jg-memoria.gif'

import hemoglobina from '../Img/hemoglobina.svg'
import coracao from '../Img/coracao.svg'
import raioX from '../Img/raioX.svg'

function EscolherJogo() {
  return (

    <div className="memoria-inicio">
      <div className="banner-memoria">
        <div className="titulo-memoria">
          <img src={banner_memoria} alt="Título jogo da memória"/>
        </div>
        <div className="jogo-memoria">
          <img src={icon_memoria} alt="jogo da memória - gif" />
        </div>
      </div>
        <h1>Escolha o tema que deseja jogar:</h1>
        <div className="memoriaEscolherDivBtn">

            <button className="memoriaEscolherBtn">
              <Link to="Hemodialize"> 
                <img className="memoriaEscolherBtnImg img-fluid" src={hemoglobina} alt="" />
                <p className="memoriaBtnP">Hemodialize</p> 
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
  );
}

export default EscolherJogo;