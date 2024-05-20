import Menu from './ComponetesGerais/Menu/Menu';
import Rodape from './ComponetesGerais/Footer/Footer';
import { Outlet } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
 
  return (
    <div>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </div>
)}

export default App