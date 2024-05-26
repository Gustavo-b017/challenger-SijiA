
import '../../css/PopUpInicio/popUp.css';
import { Link } from 'react-router-dom';
import { ContinuarBtn, ExitBtn } from './LogicaQuiz.jsx';
import moeda from '../../img/moeda.gif'
import atencao from '../../img/atencao.png'

export default function PopUpInfo() {
  return (
    <div className="popupInfo">
      <h2>Informações sobre o Quiz</h2>
      <span className='info'><img src={moeda} alt="moeda"/> 
        <span>Jogo desenvolvido para testar seus conhecimentos sobre os exames.</span> 
      </span>
      <span className='info'><img src={moeda} alt="moeda"/> 
        <span>As perguntas são de múltipla escolha, com apenas uma alternativa correta.</span>
      </span>
      <span className='info'><img src={moeda} alt="moeda"/> 
        <span>Para jogar, clique no botão "INICIAR".</span>
      </span>  <br/>
      <span className='info'><img src={moeda} alt="moeda"/> 
      <span>Boa sorte! Confiamos em Você!</span>
      </span>

      <hr/>

      <span className='info'><img src={atencao} alt="atenção"/> 
      <span>   Em futuras atualizações, as perguntas serão devidamente separadas por temas</span>
      </span>

      <hr/>

      <div className="btn-group">
        <button onClick={ExitBtn} className="info-btn">Sair</button>

        <button onClick={ContinuarBtn} className="info-btn">
          <Link to="QuizPerguntas" className='iniciaQuiz'>Iniciar</Link>
        </button>
        
      </div>
    </div>
  );
}