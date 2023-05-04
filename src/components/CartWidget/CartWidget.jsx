import React, {useContext} from 'react'
import './cart.css'
//import cart from './assets/carrito.jpg'
import {  FaShoppingCart} from "react-icons/fa"
import {CartContext} from '../context/CartContext'

export const CartWidget = () => {

  const {calcularCantidad} = useContext(CartContext)

  return (
    <>
      <FaShoppingCart className="carrito"/>
      <span> {calcularCantidad()} </span>
    </>
  )
}

export default CartWidget