import '../../../Quiz.jsx'
import '../PopUp/PopupInfo.jsx'
import { tomografia } from '../dados/tomografia.js'
import '../QuizPerguntas/QuizPerguntas.css'
import '../dados/tomografia.js'

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


// o erro esta aqui, o botao nao esta funcionando corretamente, pois nao esta chamando a funcao varias vezes com os valores diferentes
export const NextBtn = ()  => {
  const nextBtn = document.querySelector('.next-btn');
  let count = 0;
  
  if (count < tomografia.length - 1) {
    count++;
    ShowQuestions(count);
    console.log(count);
    console.log(count, tomografia.length)
  }
  else {
    console.log('Fim do Quiz');
  }
}

// aqui mostra as perguntas do quiz, que n funciona como deveria por causa co codigo acima
export const ShowQuestions = ( index ) => {
  const questionText = document.querySelector('.question-text');
  const optionList = document.querySelector('.option-list');

  questionText.textContent = `${tomografia[ index ].numb} . ${tomografia[ index ].question}`;

  let tagOption = `
    <div className="option"> <span>${ tomografia[index].options[0] }</span> </div>
    <div className="option"> <span>${ tomografia[index].options[1] }</span> </div>
    <div className="option"> <span>${ tomografia[index].options[2] }</span> </div>
    <div className="option"> <span>${ tomografia[index].options[3] }</span> </div>
  `;

  optionList.innerHTML = tagOption;

}