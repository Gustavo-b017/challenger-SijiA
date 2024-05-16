import { Link } from "react-router-dom";
import hemoglobina from '../Img/hemoglobina.svg'
import coracao from '../Img/coracao.svg'
import raioX from '../Img/raioX.svg'

function EscolherJogo() {
  return (

    <div>
        <h1>Escolha o jogo</h1>
        <p>Escolha o jogo que deseja jogar</p>
        <div className="memoriaEscolherDivBtn">

            <button className="memoriaEscolherBtn">
              <Link to="Hemodialize"> 
                <img className="memoriaEscolherBtnImg" src={hemoglobina} alt="" />
                <p className="memoriaBtnP">Hemodialize</p> 
              </Link>
            </button>

            <button className="memoriaEscolherBtn">
              <Link to="Hemodialize"> 
                <img className="memoriaEscolherBtnImg" src={coracao} alt="" />
                <p className="memoriaBtnP">ELETROCARDIOGRAMA (nao funciona)</p> 
              </Link>
            </button>
    
            <button className="memoriaEscolherBtn">
              <Link to="Hemodialize"> 
                <img className="memoriaEscolherBtnImg" src={raioX} alt="" />
                <p className="memoriaBtnP">ELETROCARDIOGRAMA (nao funciona)</p> 
              </Link>
            </button>
        </div>
    </div>
  );
}

export default EscolherJogo;