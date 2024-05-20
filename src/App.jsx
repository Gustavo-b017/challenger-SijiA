import Menu from './ComponetesGerais/Menu/Menu';
import Rodape from './ComponetesGerais/Footer/Footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
 
  return (
    <body>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </body>
)}

export default App