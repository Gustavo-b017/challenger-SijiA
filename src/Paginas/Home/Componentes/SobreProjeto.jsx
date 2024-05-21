import './css/sobreProjeto.css'
import slide1 from '../Img/slide1.png'
import slide2 from '../Img/slide2.png'
import slide3 from '../Img/slide3.png'
import slide4 from '../Img/slide4.png'
import slide5 from '../Img/slide5.png'
import slide6 from '../Img/slide6.png'

export default function SobreProjeto() {
  return (

    <section className='sobre'>
        <div className="cloud">
            <div className="container-sobre">

                <div className='titulo-sobre'>
                    <h1>Propósito</h1>
                </div>
                
                <div className="conteudo-sobre">
                    {/* Carrosel */}
                    <div id="carouselExampleFade" className="carrosel-sobre carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={slide1} alt="Primeiro Slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={slide2} alt="Segundo Slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={slide3} alt="Terceiro Slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={slide4} alt="Quarto Slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={slide5} alt="Quinto Slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={slide6} alt="Sexto Slide"/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Anterior</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Próximo</span>
                        </a>
                    </div>

                    {/* Abas */}
                    <div className="cards-proposito accordion" id="accordionExample">
                        {/* card que fica visivel */}
                        <div className="card-proposito-style card">

                            {/* titulo */}
                            <div className="card-header" id="headingOne">

                                <h2 className="mb-0">
                                    {/* botao que faz abri e fechar */}
                                    <button className="btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Problema
                                    </button>
                                </h2>

                            </div>

                            {/* codigo que abre e fecha */}
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                    O projeto busca resolver o problema da falta de informação e da ansiedade enfrentada por pacientes pediátricos 
                                    e seus acompanhantes em ambientes hospitalares. Muitas vezes, esses indivíduos se veem diante do desconhecido, 
                                    sem compreender completamente os procedimentos médicos aos quais serão submetidos. Isso gera insegurança, medo 
                                    e estresse, afetando negativamente sua experiência no hospital e sua qualidade de vida. 
                                </div>
                            </div>
                        </div>

                        <div className="card-proposito-style card">
                            <div className="card-header" id="headingTwo">
                                <h2 className="mb-0">
                                    <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Objetivo
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body">
                                    <ul>
                                        <li>1. Fornecer informações claras sobre procedimentos médicos.</li>
                                        <li>2. Promover a interatividade e a educação dos usuários.</li>
                                        <li>3. Melhorar a experiência no ambiente hospitalar.</li>
                                        <li>4. Contribuir para uma abordagem mais humanizada no cuidado pediátrico.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="card-proposito-style card">
                            <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Diferenciais
                                </button>
                            </h2>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body">
                                <ul>
                                    <li>1. Abordagem educativa e interativa.</li>
                                    <li>2. Acesso a informações claras e acessíveis.</li>
                                    <li>3. Recursos personalizados com base nas preferências individuais dos usuários.</li>
                                    <li>4. Análise contínua de desempenho para otimização da experiência do usuário.</li>
                                    <li>5. Promoção da humanização no ambiente hospitalar.</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}