import './menu.css'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'

export default function Menu() {
  return (
  <div>
    {/* bg-body-tertiary */}
    <nav className="navbar navbar-expand-lg ">
      <div className="container justify-content-space-between">
        <Link to='/' >
          <a className='menuLink' >
            <img className='imgMenu' src={logo} alt="" />
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
