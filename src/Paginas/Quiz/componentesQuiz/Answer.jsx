import React from 'react';
import PropTypes from 'prop-types';

// O componente Answer recebe três props: answer, handleAnswerClick e handleEnterPress
const Answer = ({ answer, handleAnswerClick, handleEnterPress }) => {
  // Ele retorna um item de lista que pode ser clicado ou selecionado com a tecla Enter
  return (
    <li
      className="question-answer" // A classe CSS para estilização
      tabIndex="0" // Permite a navegação com o teclado
      onClick={handleAnswerClick} // A função para lidar com cliques é passada como prop
      onKeyDown={handleEnterPress} // A função para lidar com a tecla Enter é passada como prop
    >
      {answer}
    </li>
  );
}

// PropTypes é usado para verificar se as props recebidas são do tipo correto
Answer.propTypes = {
  answer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number // answer pode ser uma string ou um número
  ]).isRequired,
  handleAnswerClick: PropTypes.func.isRequired, // handleAnswerClick deve ser uma função
  handleEnterPress: PropTypes.func.isRequired // handleEnterPress deve ser uma função
};

export default Answer; // O componente Answer é exportado para ser usado em outros arquivos