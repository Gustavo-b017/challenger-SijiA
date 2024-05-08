import {styled} from 'styled-components'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'

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

const Nav_bar_itens2 = styled.li`
  position: relative;
  transition: 0.5s;
  background: #2e3133;
  padding: 10px 6px;
  margin: 2px 12px ;

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
  text-decoration: none;
  cursor: pointer;
`

const LogoImg = styled.img `
  width: 100px;
  height: 100px;
`

export default function Menu() {
  return (
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid justify-content-space-between">
        <Link to='/' >
          <Links>
            <LogoImg src={logo} alt="" />
          </Links>
        </Link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse " id="navbarNavDropdown">
          
          <div class="navbar-nav ">

            <Nav_bar_itens class="nav-item">
              <Link to='Memoria' >
                <Links className='active'>Contato</Links>
              </Link>
            </Nav_bar_itens>

            <Nav_bar_itens class="nav-item">
              <Link to='Quiz' >
                <Links>Sobre</Links>
              </Link>
            </Nav_bar_itens>


            <li class="nav-item dropdown">
              
              <Nav_bar_itens class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <Links>Jogos</Links>
              </Nav_bar_itens>

              <ul class="dropdown-menu">
            
                <Nav_bar_itens2 class="nav-item">
                  <Link to='Memoria' >
                    <Links className='active'>Jogo da Memoria</Links>
                  </Link>
                </Nav_bar_itens2>

                <Nav_bar_itens2 class="nav-item">
                  <Link to='Quiz' >
                    <Links>Quiz</Links>
                  </Link>
                </Nav_bar_itens2>
                
              </ul>
            </li>
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}
