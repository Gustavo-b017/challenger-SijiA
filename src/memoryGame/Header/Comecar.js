import styled from 'styled-components';
import BtnComecar from './Btn_iniciar';


const Div_header = styled.main `
  margin: 30px auto ;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 80%;
`

const H1_header = styled.div `
  font-size: 2.2rem;  
  font-weight: 700;
  color: #5fe36a;
`

function Comecar() {
  return (
    <Div_header>
      <H1_header>Vai que é tua!</H1_header>
      <BtnComecar/>
    </Div_header>
  );
}

export default Comecar;