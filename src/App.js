import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {NavBar} from "./components/NavBar/NavBar";
import './App.css'
import { ItemCount } from './components/ItemCount/ItemCount';
// import { Pika } from './components/Pika/Pika';


function App() {
  return (
    <>
    <div className="principio">
      <NavBar/>
      {/* <ItemCount/>  */}
      <h2 className="titulo"> Bienvenidos al Nuevo Eccomerce</h2>
      <ItemListContainer greating={"Hola Mundo"}/>
       {<ItemCount/>}
      {/* <Pika/> */}
    </div>
    </>

  );
}

export default App;
