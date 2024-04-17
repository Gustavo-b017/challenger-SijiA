import styled from "styled-components"
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
  

const Footer_geral = styled.footer `
  padding: 2rem 0;
  width: 100%;
  background-color: #4f8be622;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Ul_icones = styled.ul `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`

const Ul_Texto = styled.ul `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  @media screen and (max-width: 800px){
    flex-direction: column;
  }
`

const Ul_li = styled.li ` 
`

const Ul_li_textos = styled.li `
  &:not(:last-child)::after {
    content: "•";
    margin: 0 0.3rem ;
    color: #fff;
  }
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px){
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    &:not(:last-child)::after {
      content: "";
    }
  }
`

const Ul_li_link_icone = styled.a `
  font-size: 2em;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  
  &:hover {
    transform: translateY(-10px);
  } 
`

const Ul_li_link = styled.a `
  font-size: 1.5rem;
  color: #fff;
  margin: 0 10px;
  display: flex;
  transition: 0.4s;
  
  &:hover {
    color: #000 ;
  }

`

const Icones = ['logo-instagram','logo-linkedin', 'logo-github', 'logo-twitter']
const linksNome = ['Home','Sobre', 'Jogo da Memoria','Quiz', 'Informacoes', 'Outros']

function Rodape() {
  return (
    <Footer_geral>

      <Ul_icones>
        {Icones.map ( (icones) => (
          <Ul_li>  
            <Ul_li_link_icone href="#">
              <ion-icon name={icones}/>
            </Ul_li_link_icone>
          </Ul_li>
        ) ) }
      </Ul_icones>

      <Ul_Texto>
        {linksNome.map ((texto) => (
          <Ul_li_textos>
            <Ul_li_link href="#">{texto}</Ul_li_link>
          </Ul_li_textos>
        ))}
      </Ul_Texto>
    </Footer_geral>
  );
}


export default Rodape;