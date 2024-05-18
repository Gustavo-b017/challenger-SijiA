
import './PopUp.css';
import { Link } from 'react-router-dom';
import { ContinuarBtn, ExitBtn } from '../LogicaQuiz';

export default function PopUpInfo() {
  return (
    <div className="popupInfo">
      <h2>Informações sobre o Quiz</h2>
      <span className='info'> 1. Esse quiz foi desenvolvido para testar seus conhecimentos sobre os exames.</span>
      <span className='info'> 2. Para jogar, clique no botão "Iniciar Quiz".</span>
      <span className='info'> 3. As perguntas são de múltipla escolha, com apenas uma alternativa correta.</span>
      <span className='info'> 4. Boa sorte!</span>
      <span className='info'> 5. Confio em Você!</span>

      <hr/>

      <div className="btn-group">
        <button onClick={ExitBtn} className="info-btn">Sair do quiz</button>
        <button onClick={ContinuarBtn} className="info-btn">
          <Link to="/QuizPerguntas">Iniciar Quiz</Link>
        
        </button>
      </div>
    </div>
  );
}