import PopUpInfo from './antigo/ComponentesQuiz/PopUp/PopupInfo.jsx';
import './antigo/Quiz.css'
import {StartBtn} from './antigo/ComponentesQuiz/LogicaQuiz/LogicaQuiz.jsx'
import QuizPerguntas from './antigo/ComponentesQuiz/QuizPerguntas/QuizPerguntas.jsx';
import './style.css';

export default function Quiz() {
  return (
    <main>
      <div className="main">
        <QuizPerguntas/>
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
