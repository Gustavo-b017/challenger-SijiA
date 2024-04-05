import { useContext, useState } from "react";
import { QuizContext } from "../context/quiz";

import Option from "./Option";

import "./Question.css";
import { styled } from "styled-components";

const BotaoQuiz = styled.button `
  display: flex;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.8rem;
  padding: 1.3rem ;
  width:100%;
  background: linear-gradient( 90deg, rgb(19, 192, 227) 0%, rgb(55, 55, 205) 100%);
  border-radius: 3rem;
  border: none;
  transition:.1s;

  &:hover {
    background: linear-gradient(
      90deg,
      rgb(0, 0, 222) 0%,
      rgb(19, 192, 227) 100%
    );
    transition:.1s linear;
  }
`

const Paragrafo = styled.p `
  margin: 1rem 0;
  font-size: 1.5rem;
`

const SubTitulo = styled.h2 `
  margin-bottom: 1.5rem;
  color: #fff;
`

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  console.log(quizState.optionToHide);

  return (
    <div id="question">
      <Paragrafo>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </Paragrafo>

      <h2>{currentQuestion.question}</h2>

      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
            hide={quizState.optionToHide === option ? "hide" : null}
          />
        ))}
      </div>

      {!quizState.answerSelected && !quizState.help && (
        <>
          {currentQuestion.tip && (
            <BotaoQuiz onClick={() => dispatch({ type: "SHOW_TIP" })}>Dica</BotaoQuiz>
          )}
          <BotaoQuiz onClick={() => dispatch({ type: "REMOVE_OPTION" })}>
            Excluir uma
          </BotaoQuiz>
        </>
      )}

      {!quizState.answerSelected && quizState.help === "tip" && (
        <p>{currentQuestion.tip}</p>
      )}

      {quizState.answerSelected && (
        <BotaoQuiz onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </BotaoQuiz>
      )}

    </div>
  );
};

export default Question;
