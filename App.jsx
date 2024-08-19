import './App.css'
import AgregarContacto from './components/AgregarContacto.jsx';
import Componentes from './components/ListaDeContactos.jsx';
import Conexionbd from './components/Conexiondb.jsx';
import ListaContactos from './components/ListaDeContactos.jsx';

function App() {

  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      <div className="App">
        <div className="AgregarContacto">
          <AgregarContacto />
        </div>
        <div className="ListaDeContactos">
          <ListaContactos />
        </div>
      </div>
    </>
  )
}

export default App