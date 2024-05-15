import { Outlet } from 'react-router-dom';
import './Componentes/memoria.css';


function Memoria() {
  return (
    <main className='mainMemoria'>
      <Outlet/>
    </main>
  );
}

export default Memoria;
