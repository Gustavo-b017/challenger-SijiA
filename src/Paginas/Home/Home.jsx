import Banner from "./Componentes/Banner";
import Caracteristicas from "./Componentes/Caracteristicas";
import Grupo from "./Componentes/Grupo";
import SobreProjeto from "./Componentes/SobreProjeto"
import "./Home.css"


export default function Home() {
  return (
      <div className="body">
        <Banner/>
        <Caracteristicas/>
        <SobreProjeto/>
        <Grupo/>
      </div>
  )
}

