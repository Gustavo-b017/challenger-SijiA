import './footer.css';
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"

const Icones = [
  {
    id:1,
    nome: 'logo-instagram',
  },
  {
    id:2,
    nome: 'logo-linkedin',
  },
  {
    id:3,
    nome: 'logo-github',
  },
  {
    id:4,
    nome: 'logo-instagram',
  }, 
  {
    id:5,
    nome: 'logo-twitter'
  },
]

const linksNome = [
  {
    id:1,
    nome: 'Home',
  },
  {
    id:2,
    nome: 'Sobre',
  },
  {
    id:3,
    nome: 'Jogo da Memoria',
  },
  {
    id:4,
    nome: 'Quiz', 
  }, 
  {
    id:5,
    nome: 'Informacoes',
  },
]

function Rodape() {
  return (
    <footer className='footer'>
      <ul className='FooterUlIcone'>
        {Icones.map ( (item, index) => (
          <li key={index}>  
            <a className='footerAIcones' href="#">
              <ion-icon 
                name={item.nome}/>
            </a>
          </li>
        ) ) }
      </ul>

      <ul className='footerUlTexto FooterUlIcone'>
        {linksNome.map ((item, index) => (
          <li className='footerLiTexto' key={index}>
            <a className='footerATexto footerAIcones' href="#">{item.nome}</a>
          </li>
        ))}
      </ul>

      
    </footer>
  );
}


export default Rodape;
