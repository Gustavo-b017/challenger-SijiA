import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Inicio from './Componentes/MemoriaHemodialize';

const Conteudo = styled.main `
  padding: 2% 5%;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  
  @media screen and (max-width: 800px) {
    padding: 1% 2%;
    margin: 0 auto;
  }
`

function Memoria() {
  return (
    <Conteudo>
      <Outlet/>
    </Conteudo>
  );
}

export default Memoria;
