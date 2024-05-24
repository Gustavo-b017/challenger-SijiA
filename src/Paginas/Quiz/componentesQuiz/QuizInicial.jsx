import PopUpInfo from './PopUp/PopupInfo.jsx';
import {StartBtn} from './PopUp/LogicaQuiz.jsx'

import banner_quiz from '../img/banner-quiz.gif'
import icon_hemograma from '../../Public/icons/hemoglobina.svg'
import icon_coracao from '../../Public/icons/coracao.svg'
import icon_raioX from '../../Public/icons/raioX.svg'



function QuizInicial() {
return (
    <main id='quiz'>
        <div className="mainQuiz">
            <section className='home-quiz'>
        
                {/* BANNER QUIZ  */}
                <div className="banner-quiz">
                    <img src={banner_quiz} className="img-fluid gif-quiz" alt="Quiz"/>
                </div>
        
                {/* LISTA DE QUIZZES */}
                <div className="temas-quiz">
                    <h1>Escolha o tema que deseja jogar:</h1>
                    <div className="escolher-quiz-div ">
        
                        <button className="escolher-quiz-btn"  type="button" onClick={StartBtn}>
                            <img className="escolher-quiz-btn-img img-fluid" src={icon_hemograma} alt="Quiz - hemograma" />
                            <p className="quiz-btn-p">Hemodiálise</p> 
                        </button>
            
                        <button className="escolher-quiz-btn"  type="button" onClick={StartBtn}>
                            <img className="escolher-quiz-btn-img img-fluid" src={icon_coracao} alt="Quiz - eletrocardiograma" />
                            <p className="quiz-btn-p" id="eletrocardiograma">Eletrocardiograma</p> 
                        </button>
            
                        <button className="escolher-quiz-btn"  type="button" onClick={StartBtn}>
                            <img className="escolher-quiz-btn-img img-fluid" src={icon_raioX} alt="Quiz - raioX" />
                            <p className="quiz-btn-p">Raio-X</p> 
                        </button>
                    </div>
                </div>
            </section>
        </div>
        
        <PopUpInfo/>
    </main>
);
}

export default QuizInicial;