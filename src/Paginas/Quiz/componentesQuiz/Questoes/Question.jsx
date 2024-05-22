import PropTypes from 'prop-types';
import Answer from './Answer';

// O componente Question recebe quatro props: question, answers, handleAnswerClick e handleEnterPress
function Question ({ question, answers, handleAnswerClick, handleEnterPress }) {
  // Ele retorna um item de lista com o título da pergunta e uma lista de respostas
  return (
    <li className="question">
      <h2 className="question-title" tabIndex="0">
         {/* O texto da pergunta é renderizado aqui */}
         {question} 
      </h2>
      <ul className="question-answers" tabIndex="-1">
        {answers && answers.map((answer, index) => {
          // Para cada resposta em answers, um componente Answer é renderizado
          return (
            <Answer
              key={index} // A prop key é necessária ao renderizar listas em React
              answer={answer} // A resposta atual é passada como prop
              handleAnswerClick={handleAnswerClick(index)} // A função para lidar com cliques na resposta é passada como prop
              handleEnterPress={handleEnterPress(index)} // A função para lidar com a tecla Enter é passada como prop
            />
          );
        })}
      </ul>
    </li>
  );
}

// PropTypes é usado para verificar se as props recebidas são do tipo correto
Question.propTypes = {
  question: PropTypes.string.isRequired, // question deve ser um elemento React
  answers: PropTypes.array.isRequired, // answers deve ser um array
  handleAnswerClick: PropTypes.func.isRequired, // handleAnswerClick deve ser uma função
  handleEnterPress: PropTypes.func.isRequired // handleEnterPress deve ser uma função
};

export default Question; // O componente Question é exportado para ser usado em outros arquivos