import Menu from './ComponetesGerais/Menu/Menu';
import Rodape from './ComponetesGerais/Footer/Footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Fundo from './ComponetesGerais/img/background.jpg';

const Body_geral = styled.body `
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: 'Roboto', sans-serif;
  background-image: url(${Fundo});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: #fff; 
`

function App() {
 
  return (
    <Body_geral>
      <Menu/>
      
      <Outlet/>
      
      <Rodape/>
    </Body_geral>
)}

export default App