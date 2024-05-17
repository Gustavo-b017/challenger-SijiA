import '../../../Quiz.jsx'
import '../PopUp/PopupInfo.jsx'
import '../QuizPerguntas/QuizPerguntas.css'

// mostra o card de informcao
export function StartBtn  ()   {
  const popupInfo = document.querySelector('.popupInfo');
  
  popupInfo.classList.add('active');
}

// feca o card de informacao
export const ExitBtn = ()  => {
  const popupInfo = document.querySelector('.popupInfo');
  
  popupInfo.classList.remove('active');
}

export const ContinuarBtn = ()  => {
  const quizSection = document.querySelector('.quizSection');
  const popupInfo = document.querySelector('.popupInfo');
  const quizBox = document.querySelector('.quiz-box');
  
  quizSection.classList.add('active');
  quizBox.classList.add('active');
  popupInfo.classList.remove('active');

  ShowQuestions(0);
}

