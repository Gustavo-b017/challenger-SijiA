import React from 'react';
import PropTypes from 'prop-types';
import QuestionList from './Questoes/QuestionList';
import '../css/QuizPerguntas/quizPerguntas.css'

// O componente QuizNew recebe cinco props: step, questions, totalQuestions, score, handleAnswerClick e handleEnterPress
function QuizNew ({ step, questions, totalQuestions, score, handleAnswerClick, handleEnterPress }){
  // Ele retorna um div com a estrutura do quiz
  return (
    <div className="wrapper">
      <header className='cabecalho-quiz'>
        <div className="question-count">
          <h2>Questão</h2>
          {/* O número da questão atual e total é renderizado aqui */}
          <div className="question-number">{step} <span className="description">de {totalQuestions}</span></div> 
        </div>
        <div className="score-container">
          {/* A pontuação atual é renderizada aqui */}
          <div className="score">{score} <span className="description">pontos</span></div> 
        </div>
      </header>

      <div className="questions">
        <QuestionList
          // A lista de questões é passada como prop
          questions={questions} 
          // A função para lidar com cliques na resposta é passada como prop
          handleAnswerClick={handleAnswerClick} 
          // A função para lidar com a tecla Enter é passada como prop
          handleEnterPress={handleEnterPress} 
        />
      </div>
    </div>
  );
}

// PropTypes é usado para verificar se as props recebidas são do tipo correto
QuizNew.propTypes = {
  step: PropTypes.number.isRequired, // step deve ser um número
  questions: PropTypes.array.isRequired, // questions deve ser um array
  totalQuestions: PropTypes.number.isRequired, // totalQuestions deve ser um número
  score: PropTypes.number.isRequired, // score deve ser um número
  handleAnswerClick: PropTypes.func.isRequired, // handleAnswerClick deve ser uma função
  handleEnterPress: PropTypes.func.isRequired // handleEnterPress deve ser uma função
};

export default QuizNew; // O componente QuizNew é exportado para ser usado em outros arquivos