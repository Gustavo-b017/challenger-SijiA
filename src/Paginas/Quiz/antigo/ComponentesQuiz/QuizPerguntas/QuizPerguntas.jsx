import QuizNovo from '../../../QuizNovo';
import { NextBtn } from '../LogicaQuiz/LogicaQuiz';
import './QuizPerguntas.css';

export default function QuizPerguntas() {
  return (
    <section className='quizSection'>
      <div className="quiz-box">
       <QuizNovo></QuizNovo>
      </div>
    </section>

  );
}
