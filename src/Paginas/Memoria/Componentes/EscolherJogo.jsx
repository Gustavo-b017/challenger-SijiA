import { Link } from "react-router-dom";

function EscolherJogo() {
  return (
    <div>
        <h1>Escolha o jogo</h1>
        <p>Escolha o jogo que deseja jogar</p>
        <div>
            <button>
                <Link to="Hemodialize">Hemodialize</Link>
            </button>
            <button>Frutas</button>
            <button>Objetos</button>
        </div>
    </div>
  );
}

export default EscolherJogo;