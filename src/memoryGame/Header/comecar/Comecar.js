import { hover } from '@testing-library/user-event/dist/hover';
import styled from 'styled-components';


const Div_header = styled.div `
  min-height: 50vh;
  margin: 30px auto ;
  align-items: center;
  display: flex;
  flex-direction: column;
`

const H1_header = styled.div `
  font-size: 2.2rem;  
  font-weight: 700;
  color: #5fe36a;
`

const Botao_header = styled.button `
  background: none;
  border: 2px solid #fff;
  margin: 10px 0;
  padding: 6px 12px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;

  &:hover{
    background-color: #5fe36a;
    color: #c83989;
  }
`


function Comecar() {
  return (
    <Div_header>
      <H1_header>Vai que é tua!</H1_header>
      <Botao_header>Novo jogo</Botao_header>
    </Div_header>
  );
}

export default Comecar;