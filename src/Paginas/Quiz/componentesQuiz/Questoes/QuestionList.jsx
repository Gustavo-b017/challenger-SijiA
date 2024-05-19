import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

// O componente QuestionList recebe três props: questions, handleAnswerClick e handleEnterPress
function QuestionList ({ questions, handleAnswerClick, handleEnterPress }) {
  // Ele retorna uma lista não ordenada de componentes Question
  return (
    <ul className="question-list">
      {questions.map((question) => {
        // Para cada objeto question em questions, um componente Question é renderizado
        return (
          <Question
            key={question.id} // A prop key é necessária ao renderizar listas em React
            question={question.question} // A pergunta atual é passada como prop
            answers={question.answers} // As respostas para a pergunta atual são passadas como prop
            handleAnswerClick={handleAnswerClick} // A função para lidar com cliques na resposta é passada como prop
            handleEnterPress={handleEnterPress} // A função para lidar com a tecla Enter é passada como prop
          />
        );})}

    </ul>
  );
}

// PropTypes é usado para verificar se as props recebidas são do tipo correto!
QuestionList.propTypes = {
  questions: PropTypes.array.isRequired, // questions deve ser um array
  handleAnswerClick: PropTypes.func.isRequired, // handleAnswerClick deve ser uma função
  handleEnterPress: PropTypes.func.isRequired // handleEnterPress deve ser uma função
};

export default QuestionList; // O componente QuestionList é exportado para ser usado em outros arquivos