import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import tally from '../../helpers/tally';
import parabens from '../../img/presente.gif';


const Results = ({ userAnswers, score, restartQuiz }) => {
  const triesTotal = tally(userAnswers);
  const oneTry = triesTotal[1] && <div><strong>{triesTotal[1]}</strong> Na primeira tentativa.</div>;
  const twoTries = triesTotal[2] && <div><strong>{triesTotal[2]}</strong> Na segunda tentativa.</div>;
  const threeTries = triesTotal[3] && <div><strong>{triesTotal[3]}</strong> Na terceira tentativa.</div>;
  const fourTries = triesTotal[4] && <div><strong>{triesTotal[4]}</strong> Na quarta tentativa.</div>;
  
  return (
    <div className="results-container">
      <h2>Parabéns <img src={parabens} alt="Presente"/></h2>
      <div className='results'>
        <span>Você acertou...</span>
        {oneTry}
        {twoTries}
        {threeTries}
        {fourTries}
        <span className="results-total">Total: <strong>{score} pontos</strong></span>
      </div>
      <div className="btn-group">
        <button onClick={restartQuiz} className='info-btn'>Reiniciar</button>
        <button className='info-btn'><Link to="/Quiz" className='formLink'>Sair</Link></button>
      </div>
    </div>
  );
}

Results.propTypes = {
  userAnswers: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired
};

export default Results;
