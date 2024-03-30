import './LinksNavegacao.css'

const linksNome = ['HOME','Sore', 'Jogos', 'Informacoes', 'Outros']

function LinksNavegacao() {
  return (
    <ul id="ul_estilo">
        { linksNome .map ( (texto) => (
            <li> 
              <a href='#'>{texto}</a>
            </li>
        ) ) }
    </ul>
  )
}

export default LinksNavegacao;