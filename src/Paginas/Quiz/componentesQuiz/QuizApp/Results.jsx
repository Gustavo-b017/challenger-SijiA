import React from 'react';
import PropTypes from 'prop-types';
import tally from '../../helpers/tally';

const Results = ({ userAnswers, score, restartQuiz }) => {
  const triesTotal = tally(userAnswers);
  const oneTry = triesTotal[1] && <div><strong>{triesTotal[1]}</strong> Na primeira tentativa.</div>;
  const twoTries = triesTotal[2] && <div><strong>{triesTotal[2]}</strong> Na segunda tentativa.</div>;
  const threeTries = triesTotal[3] && <div><strong>{triesTotal[3]}</strong> Na terceira tentativa.</div>;
  const fourTries = triesTotal[4] && <div><strong>{triesTotal[4]}</strong> Na quarta tentativa.</div>;
  
  return (
    <div className="results-container">
      <h2 className='h2-subtitulo'>Resultados do Quiz</h2>
      <div>Você acertou..</div>
      {oneTry}
      {twoTries}
      {threeTries}
      {fourTries}
      <div className="results-total">Seu total de pontos é : <strong>{score}</strong></div>
      <a onClick={restartQuiz} id='reiniciarQuiz'>Reiniciar Quiz</a>
    </div>
  );
}

Results.propTypes = {
  userAnswers: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired
};

export default Results;
