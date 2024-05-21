import './contato.css'
import img_contato from './img/nuvem-contato.png'
import icon_nome from './img/icon-user.svg'
import icon_email from './img/icon-email.svg'
import icon_mensagem from './img/icon-mensagem.svg'

function Contato() {
    return ( 
        <main id="contato">
            <div className="containerContato">
                <div className="formularioContato">

                    {/* TÍTULO */}
                    <h1>CONTATO</h1>

                    {/* CAMPO NOME */}
                    
                    <div className="inputContato input-group mb-3">
                        <span className="input-group-text">
                            <img src={icon_nome} className='imgIconsContato ' alt="nome"/>
                        </span>
                        
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Digite seu nome"/>
                            <label htmlFor="floatingInputGroup1">Digite seu nome</label>
                        </div>
                    </div>

                    {/* CAMPO EMAIL */}
                    <div className="inputContato input-group mb-3">
                        <span className="input-group-text">
                            <img src={icon_email} className='imgIconsContato ' alt="email"/>
                        </span>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Digite seu email</label>
                        </div>
                    </div>

                    {/* CAMPO MENSAGEM */}
                    <div className="inputContato input-group mb-4">

                        <span className="input-group-text">
                            <img src={icon_mensagem} className='imgIconsContato ' alt="nome"/>
                        </span>

                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label htmlFor="floatingTextarea">Esvreva sua mensagem</label>
                        </div>
                    </div>
        
                    <button type="button" className="btnContato">ENVIAR</button>

                </div>

                {/* BANNER CONTATO */}
                <div className="imgContato">
                    <img src={img_contato}  className="img-fluid" alt="Contato"/>
                </div>

            </div>
        </main>
     );
}

export default Contato;