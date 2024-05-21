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
          <img className='imgMenu' src={logo} alt="" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse test" id="navbarNavDropdown">
          
          <ul className="navbar-nav ">

            <li className="menuItens">
              <Link to='Contato' className='menuLink active'>
                Contato
              </Link>
            </li>

            <li className="menuItens">
              <Link to='Duvidas' className='menuLink'>
                Duvidas
              </Link>
            </li>

            <li className="menuItens">
              <Link to='Videos' className='menuLink'>
                Videos
              </Link>
            </li>

            <ul className="dropdown menuItens">
              <li className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <Link to='#' className='menuLink menuJogos'>
                  <span> Jogos</span>
                </Link>
              </li>

              <ul className="dropdown-menu">
                <li className="menuItens menuItens2">
                  <Link to='Memoria' className='menuLink menuJogosMemoria' >
                    Memoria
                  </Link>
                </li>

                <li className="menuItens menuItens2">
                  <Link to='Quiz' className='menuLink menuJogosQuiz'>
                    Quiz
                  </Link>
                </li>
                
              </ul>
            </ul>

          </ul>
        </div>
      </div>
    </nav>

  </div>
  )
}
