import './css/grupo.css'
import felipe from '../Img/perfil_felipe.png'
import gilson from '../Img/perfil_gilson.png'
import gustavo from '../Img/perfil_gustavo.png'

export default function Grupo() {
  return (

  <section className='grupo'>
    <div className="titulo-grupo">
      <h1>Desenvolvedores</h1>
    </div>
    <div className="container-grupo">
      {/* Gustavo */}
      <div className="card-grupo">
          <div className="img-box">
            <img src={gustavo} alt="Gustavo"/>
          </div>
          <div className="conteudo">
            <h2>Gustavo Bezerra</h2>
            <p>
              Estudo engenharia de software na FIAP.
              Sou um entusiasta da tecnologia, amo e gosto de aprender tudo relacionado a isso.
            </p>
            <a href="" className="leia-mais">
              Veja mais
            </a>
          </div>
        </div>

      {/* Gilson */}
        <div className="card-grupo">
          <div className="img-box">
            <img src={gilson} alt="Gilson" />
          </div>
          <div className="conteudo">
            <h2>Gilson Dias</h2>
            <p>
              Estudante de engenharia de software na FIAP. Amo tecnologia, 
              principalmente aquelas que causam impacto por serem diferentes 
              e inusitadas. 
            </p>
            <a href="" className="leia-mais">
              Veja mais
            </a>
          </div>
        </div>

      {/* Felipe*/}
      <div className="card-grupo">
          <div className="img-box">
            <img src={felipe} alt="Felipe" />
          </div>
          <div className="conteudo">
            <h2>Felipe Ferreira</h2>
            <p>
              Sou estudante de Engenharia de Software na Fiap. Acredito que sou guiado pela criatividade , que me faz fazer bem feito
              qualquer tipo de trabalho tecnológico.
            </p>
            <a href="" className="leia-mais">
              Veja mais
            </a>
          </div>
      </div>
    </div>
  
  </section>
  )
}