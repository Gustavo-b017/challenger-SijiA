import './footer.css';
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"

const Icones = ['logo-instagram','logo-linkedin', 'logo-github', 'logo-twitter']
const linksNome = ['Home','Sobre', 'Jogo da Memoria','Quiz', 'Informacoes', 'Outros']

function Rodape() {
  return (
    <footer className='footer'>
      <ul className='FooterUlIcone'>
        {Icones.map ( (icones) => (
          <li>  
            <a className='footerAIcones' href="#">
              <ion-icon name={icones}/>
            </a>
          </li>
        ) ) }
      </ul>

      <ul className='footerUlTexto FooterUlIcone'>
        {linksNome.map ((texto) => (
          <li className='footerLiTexto'>
            <a className='footerATexto footerAIcones' href="#">{texto}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
}


export default Rodape;
