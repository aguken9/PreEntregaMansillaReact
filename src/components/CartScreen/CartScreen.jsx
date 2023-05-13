import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import {BsFillTrashFill} from "react-icons/bs";
import { CartContext } from '../context/CartContext';
import './CartScreen.css'
import { Link } from 'react-router-dom';

export const CartScreen = () => {

    const {carrito, precioTotal, removerItem, vaciarCarrito} = useContext(CartContext)

  return (
    <div className='container my-5'>
        {
            carrito.length === 0
            ?<>
            <h3>Carrito Vacio</h3>
            <Link to= '/' className='btn btn-success'> Volver a comprar</Link>
            </>
            :<>
                    <h3>Resumen de Compras</h3>
        <hr />
    {
        carrito.map((prod) =>(
            <>   
                <hr />
                <div className="listado">
                    <p>Producto: {prod.description} </p>
                    <p>$ {prod.precio} </p>
                    <p>Cantidad: {prod.counter} </p>
                    <Button  onClick={() => removerItem(prod.id)}>
                        <BsFillTrashFill/>
                    </Button>
                </div>
            </>
        ))
    }
    
    <hr />
    <strong>Precio total: ${precioTotal()}</strong>
    <Button className='btn btn-danger' onClick={vaciarCarrito}> Vaciar carrito!</Button>
    <Link className='btn btn-success' to='/checkout'> Terminar Compra</Link>        
            </>

        }

    </div>
   
  )
}
