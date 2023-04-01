import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {NavBar} from "./components/NavBar/NavBar";
import './App.css'


function App() {
  return (
    <body>
    <div className="principio">
      <NavBar/>
      <h2 className="titulo"> Bienvenidos al Nuevo Eccomerce</h2>
      <ItemListContainer greeting={"Hola Mundo"}/>    
    </div>
    </body>

  );
}

export default App;
