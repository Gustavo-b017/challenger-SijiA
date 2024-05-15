import './menu.css'
import {styled} from 'styled-components'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'

const a  = styled.a `
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
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container justify-content-space-between">
        <Link to='/' >
          <a className='menuLink' >
            <LogoImg src={logo} alt="" />
          </a >
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse test" id="navbarNavDropdown">
          
          <div className="navbar-nav ">

            <li className="menuItens">
              <Link to='/' >
                <a className='menuLink active'>Contato</a >
              </Link>
            </li>

            <li className="menuItens">
              <Link to='/' >
                <a className='menuLink' >Sobre</a >
              </Link>
            </li>


            <li className="dropdown menuItens">
              
              <li className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <a className='menuLink' >Jogos</a >
              </li>

              <ul className="dropdown-menu">
            
                <li className="menuItens menuItens2">
                  <Link to='Memoria' >
                    <a className='menuLink active'>Jogo da Memoria</a >
                  </Link>
                </li>

                <li className="menuItens menuItens2">
                  <Link to='Quiz' >
                    <a className='menuLink' >Quiz</a >
                  </Link>
                </li>
                
              </ul>
            </li>
          </div>
        </div>
      </div>
    </nav>

  </div>
  )
}
