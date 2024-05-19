import './contato.css'
import img_contato from './img/nuvem-contato.png'
import icon_nome from './img/icon-user.svg'

function Contato() {
    return ( 
        <main id="contato">
            <div className="formularioContato">
                <h1>CONTATO</h1>
                <div className="inputContato form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Username"/>
                    <label for="floatingInputGroup1"><img src={icon_nome} alt="nome" /> Username</label>
                </div>
                <div className="inputContato form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="inputContato form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Comments</label>
                </div>
            </div>
            <div className="imgContato">
                <img src={img_contato} alt="Contato" />
            </div>
        </main>
     );
}

export default Contato;