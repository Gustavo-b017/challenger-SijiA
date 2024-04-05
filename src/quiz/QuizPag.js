import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";
import Welcome from "./components/Welcome";
import Question from "./components/Question";
import GameOver from "./components/GameOver";
import PickCategory from "./components/PickCategory";
import { styled } from "styled-components";

const DivPerguntas = styled.div `
  text-align: center;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Titulo = styled.h1 `
  font-size: 2rem;
  margin: 0.5rem 0;
`


function QuizPag() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <DivPerguntas>
      <Titulo>Quiz</Titulo>

      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </DivPerguntas>
  );
}

export default QuizPag;
