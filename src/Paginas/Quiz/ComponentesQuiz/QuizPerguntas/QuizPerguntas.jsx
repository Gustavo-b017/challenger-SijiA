import { NextBtn } from '../LogicaQuiz/LogicaQuiz';
import './QuizPerguntas.css';

export default function QuizPerguntas() {
  return (
    <section className='quizSection'>
      <div className="quiz-box">
        <h1>Codehal Quiz</h1>

        <div className="quiz-header">
          <span>Jogo do Quiz</span>
          <span className="header-score">Acertos: 0/5</span>
        </div>

        <div className="meioQuiz">

          <h2  className="question-text">o que e feito o html?</h2>

          <div className="option-list">
{/*             
            <div className="option">
              <span>1 sdgfdgfdg</span>
            </div>
            
            <div className="option">
              <span>2 fdhsdfghghgfh</span>
            </div>
            
            <div className="option">
              <span>3 dgdafhgadhd</span>
            </div>
            
            <div className="option">
              <span>4 dgfdgdfhg</span>
            </div> */}

          </div>
        </div>

        <div className="quiz-footer">
          <span className="question-total"> 1 de 5 questoes </span>
          <button onClick={NextBtn} className="next-btn">Proxima</button>
        </div>
      </div>
    </section>

  );
}
