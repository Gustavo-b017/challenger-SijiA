import Banner from "./Componentes/Banner";
import Caracteristicas from "./Componentes/Caracteristicas";
import Grupo from "./Componentes/Grupo";
import SobreProjeto from "./Componentes/SobreProjeto"

export default function Home() {
  return (
      <div>
        <Banner/>
        <Caracteristicas/>
        <SobreProjeto/>
        <Grupo/>
      </div>
  )
}

