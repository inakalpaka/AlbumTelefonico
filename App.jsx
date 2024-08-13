import './App.css'
import AgregarContacto from './components/AgregarContacto.jsx';
import Componentes from './components/Componentes.jsx';
import Conexionbd from './components/Conexiondb.jsx';

function App() {

  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      <div className="App">
        <h1>Actividades</h1>
      </div>
      <div className="AgregarContacto">
        <AgregarContacto/>
      </div>
      <div className="Conexionbd  ">
        <Conexionbd/>
      </div>
    </>
  )
}

export default App