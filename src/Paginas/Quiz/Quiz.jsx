import PopUpInfo from './componentesQuiz/IniciapPopUp/PopUp/PopupInfo.jsx';
import './componentesQuiz/IniciapPopUp/QuizPerguntas.css'
import {StartBtn} from './componentesQuiz/IniciapPopUp/LogicaQuiz.jsx'

import banner_quiz from './img/banner-quiz.gif'

export default function Quiz() {
  return (
    <main>
      <div className="main">
        <section className='home-quiz'>

          {/* BANNER QUIZ */}
          <div className="banner-quiz">
            <div className="titulo-quiz">
              <img src={banner_quiz} alt="Quiz"/>
            </div>
          </div>

          {/* LISTA DE QUIZZES */}
          <div className="home-content">
            <h1>Pagina do Quiz</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolore iure non rerum blanditiis nemo corrupti dolor dignissimos ex laboriosam repellendus delectus</p>
            <button type="button" onClick={StartBtn} className='start-btn'>Iniciar Quiz </button>
          </div>
        </section>
      </div>
      
      <PopUpInfo/>
    </main>
  );
}
