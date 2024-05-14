import './css/caracteristicas.css'
import nuvem1 from '../Img/nuvem1.png'
import nuvem2 from '../Img/nuvem2.png'
import nuvem3 from '../Img/nuvem3.png'
import i_jogo from '../Img/icon_jogo.svg'
import i_quiz from '../Img/icon_quiz.svg'
import i_video from '../Img/icon_video.svg'

export default function Caracteristicas() {
  return (
    <div className="container-nuvens">
        
        <div className="nuvem">
            <img src={nuvem1} class="img-fluid nuvens-img" alt="nuvem"></img>
            <div className="content">
                <img src={i_video} class="img-fluid" alt="videos"></img>
                <span className="nuvem-text">
                    Vídeos curtos  sobre exames e diagnósticos.
                </span>
            </div>
        </div>

        <div className="nuvem">
            <img src={nuvem2} class="img-fluid nuvens-img" alt="jogos"/>
            <div className="content">
                <img src={i_jogo} class="img-fluid" alt="jogos"></img>
                <span className="nuvem-text">
                    Jogos dinâmicos para entreter e informar.
                </span>
            </div>
        </div>

        <div className="nuvem">
            <img src={nuvem3} class="img-fluid nuvens-img" alt="conhecimento"/>
            <div className="content">
                <img src={i_quiz} class="img-fluid" alt="quiz"></img>
                <span className="nuvem-text">
                    Feedbacks e tratamento personalizado. 
                </span>
            </div>
        </div>
    </div>
  )
}