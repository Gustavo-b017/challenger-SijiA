import '../../Quiz.jsx'
import './PopupInfo.jsx'

// mostra o card de informcao
export function StartBtn  ()   {
  const popupInfo = document.querySelector('.popupInfo');
  const fundoBlur = document.querySelector('.mainQuiz');
  
  popupInfo.classList.add('active');
  fundoBlur.classList.add('activeBlur');
}

// feca o card de informacao
export const ExitBtn = ()  => {
  const popupInfo = document.querySelector('.popupInfo');
  const fundoBlur = document.querySelector('.mainQuiz');
  
  popupInfo.classList.remove('active');
  fundoBlur.classList.remove('activeBlur');
}

export const ContinuarBtn = ()  => {
  const quizSection = document.querySelector('.quizSection');
  const popupInfo = document.querySelector('.popupInfo');
  const quizBox = document.querySelector('.quiz-box');
  
  if (quizSection) {
    quizSection.classList.add('active');
  }
  if (quizBox) {
    quizBox.classList.add('active');
  }
  if (popupInfo) {
    popupInfo.classList.remove('active');
  }

}

