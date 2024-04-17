import {styled} from 'styled-components'
import {Link} from 'react-router-dom'

const Nav = styled.ul `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.8% 2.4%;
`

const Nav_bar = styled.ul `
  display: flex;
  position: relative;
  transition: 0.5s;
  align-items: center;
  justify-content: end;
  margin: 5px 20px;
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

const Links = styled.a `
  padding: 5px;
  text-transform: uppercase;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
`

const Logo = styled.h1 `
  font-weight: 700;
  text-transform: uppercase;
  font-size: 3rem;
  color: #ffffff;
  filter: drop-shadow(0 0 0.8rem #1f0061);
`

export default function Menu() {
  return (
    <Nav>
      <Logo>SijiA</Logo>
      
      <Nav_bar>
        <Nav_bar_itens> 
          <Link to='/' >
            <Links>Home</Links>
          </Link>
        </Nav_bar_itens>

        <Nav_bar_itens> 
          <Link to='Memoria' >
            <Links>Jogo da Memoria</Links>
          </Link>
        </Nav_bar_itens>
        
        <Nav_bar_itens> 
          <Link to='Quiz' >
            <Links>Quiz</Links>
          </Link>
        </Nav_bar_itens>
      </Nav_bar>
    </Nav>
  )
}
