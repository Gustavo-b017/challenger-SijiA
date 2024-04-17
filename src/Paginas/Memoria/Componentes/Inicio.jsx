import styled from 'styled-components';
import LogicaMemoria from './LogicaMemoria';


const Div_header = styled.main `
  margin: 30px auto ; 
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
`

const H1_header = styled.div `
  font-size: 2.2rem;  
  font-weight: 700;
  color: #5fe36a;
`

function Inicio() {
  return (
    <Div_header>
      <H1_header>Vai que é tua!</H1_header>
      <LogicaMemoria/>
    </Div_header>
  );
}

export default Inicio;