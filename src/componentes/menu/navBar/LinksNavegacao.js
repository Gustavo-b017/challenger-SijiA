import styled from 'styled-components';

const Nav_bar = styled.ul`
  display: flex;
  position: relative;
  transition: 0.5s;
  align-items: center;
  justify-content: end;
`

const Nav_bar_itens = styled.li`
  position: relative;
  transition: 0.5s;
  background: #2e3133;
  padding: 10px 6px;

  &:hover {
    background: #33a3ee;
    transform: translateY(15px);
    transition: 0.5s;
  }

  &:before {
    content: '';
    position: absolute;
    left: 100%;
    width: 10px;
    height: 100%;
    background: #2e3133 ;
    transform: skewY(60deg);
    transform-origin: right;
    transition: 0.5s;
    bottom: -16px;
  }

  &:hover::before {
    background: #1f5378;
    transition: 0.5s;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    background: #35383e;
    transform-origin: bottom;
    transform: 0.5s;
    bottom: -15px;
    left: 8px;
    height: 15px;
    transform: skewX(27deg);
  
  }
  
  &:hover:after {
    background: #2982b9;
    transition: 0.5s;
  }
`

const Nav_bar_links = styled.a`
  padding: 5px;
  text-transform: uppercase;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
`

const linksNome = ['HOME','Sore', 'Jogos', 'Informacoes', 'Outros']

function LinksNavegacao() {
  return (
    <Nav_bar>
        { linksNome.map ( (texto) => (
            <Nav_bar_itens> 
              <Nav_bar_links href='#'>{texto}</Nav_bar_links>
            </Nav_bar_itens>
        ) ) }
    </Nav_bar>
  )
}

export default LinksNavegacao;