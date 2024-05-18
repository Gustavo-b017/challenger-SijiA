import PopUpInfo from './componentesQuiz/IniciapPopUp/PopUp/PopupInfo.jsx';
import './componentesQuiz/IniciapPopUp/QuizPerguntas.css'
import {StartBtn} from './componentesQuiz/IniciapPopUp/LogicaQuiz.jsx'

export default function Quiz() {
  return (
    <main>
      <div className="main">
        <section className='home'>
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
