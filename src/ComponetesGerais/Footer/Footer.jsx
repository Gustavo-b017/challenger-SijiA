import "./footer.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Rodape() {

  const [icones, setIcones] = useState([])
  const [links, setLinks] = useState([])

      useEffect(() => {
          fetch(`https://6650c6a420f4f4c4427613db.mockapi.io/footer/icones`)
          .then(response => response.json())
          .then(data => {
            setIcones(data)
            console.log(data)
          })
      }, [])
  
  
      useEffect(() => {
          fetch(`https://6650c6a420f4f4c4427613db.mockapi.io/footer/links`)
          .then(response => response.json())
          .then(data => {
            setLinks(data)
            console.log(data)
          })
      }, [])

  return (
    <footer className="footer">
      <ul className="FooterUlIcone">
        {icones && icones.map((icone) => (
          <li key={icone.id}>  
            <a className="footerAIcones" href="#">
              <ion-icon 
                name={icone.nome}/>
            </a>
          </li>
        ) ) }
      </ul>

      <ul className="footerUlTexto FooterUlIcone">
        {links && links.map((link) => (
          <li className="footerLiTexto" key={link.id}>
            <Link className="footerATexto footerAIcones" to={link.link}>
              {link.nome}
            </Link>
          </li>
        ))}
      </ul>

    </footer>
  );
}


export default Rodape;