import './caracteristicas.css'
import nuvem1 from '../Img/nuvem1.png'
import nuvem2 from '../Img/nuvem2.png'
import nuvem3 from '../Img/nuvem3.png'

export default function Caracteristicas() {
  return (
    <div className="container-nuvens">
        <div className="nuvem">
            <img src={nuvem1} class="img-fluid nuvens-img" alt="videos"></img>
            <p className="nuvem-text">
                Vídeos curtos  sobre exames e diagnósticos.
            </p>
        </div>
        <div className="nuvem">
            <img src={nuvem2} class="img-fluid nuvens-img" alt="jogos"/>
            <p className="nuvem-text">
                Jogos dinâmicos para entreter e informar.
            </p>
        </div>
        <div className="nuvem">
            <img src={nuvem3} class="img-fluid nuvens-img" alt="conhecimento"/>
            <p className="nuvem-text">
                Feedbacks e tratamento personalizado. 
            </p>
        </div>
    </div>
  )
}