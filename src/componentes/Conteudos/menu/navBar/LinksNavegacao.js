import styled from 'styled-components';
// atribua o caminho de uma pagina js a uma variavel que sera chamada em uma lista
import memoria from '../../../../memoryGame/Header/Comecar'
import quiz from '../../../../quiz/QuizPag'

const Nav_bar = styled.ul `
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
// lista que contem o nome do links
const linksNome = ['HOME','Sobre', 'Jogo da Memoria','Quiz', 'Informacoes', 'Outros']
// lista onde fica os rectivos links, onde os nomes sao importados a cima
const linksLinks = ["#", '#', memoria, quiz, '#', '#']

function LinksNavegacao() {
  return (
    <Nav_bar>
      {/* le uma lista e cada elemento e salvo no parametro do .map, como uma especie mais simples do for */}
        { linksNome.map ( (texto) => (
          // cria uma tag do html (li) ja estilizada a cada itam da lista que foi chamada com o .map 
           <Nav_bar_itens>  
              {/* cria um 'a' do html ja estilizado, cuja o href sera do mesmo index que o nome do li, onde ira 'pegar' o nome que aparecera no a junto com seu respectivo link*/}
              <Nav_bar_links href={linksLinks}>{texto}</Nav_bar_links>
            </Nav_bar_itens>
        ) ) }
    </Nav_bar>
  )
}

export default LinksNavegacao;