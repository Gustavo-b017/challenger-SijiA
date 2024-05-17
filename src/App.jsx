import Menu from './ComponetesGerais/Menu/Menu';
import Rodape from './ComponetesGerais/Footer/Footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Body_geral = styled.body `
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: linear-gradient(#fff 15% , #42A6D3 35%);
  font-family: 'Roboto', sans-serif;
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