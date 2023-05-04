import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {NavBar} from "./components/NavBar/NavBar";
import './App.css'
import { ItemCount } from './components/ItemCount/ItemCount';
import { CartScreen } from './components/CartScreen/CartScreen';
//  import { Pika } from './components/Pika/Pika';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route
} from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/context/CartContext';




function App() {

 
  return (
    <CartProvider >
      <div className='App'>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element= {<ItemListContainer/>}/>
            <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/counter' element= {<ItemCount/>}/>
            <Route path='/cart' element= {<CartScreen/>}/>
            {/* <Route path='/pika' element= {<Pika/>}/> */}
            <Route path='*' element= {<Navigate to='/'/>}/>
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
