import styled from 'styled-components';
import LinksNavegacao from './componentes/Conteudos/menu/navBar/LinksNavegacao.js';
import Rodape from './componentes/Footer/Footer.js';
import Comecar from './memoryGame/Header/Comecar';

const Nav = styled.nav `
  padding: 0.5rem 2% 2rem 0rem;
  background-color: #6f6f6f;
`
const Conteudo = styled.main `
  padding: 0 10%;
`

function App() {
  return (
    <div>
      <Nav >
        <LinksNavegacao/>
      </Nav>

      <Conteudo>
        <Comecar/>
      </Conteudo>
      

      <Rodape/>
    </div>
  );
}

export default App;
