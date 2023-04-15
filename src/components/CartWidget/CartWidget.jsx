import React from 'react'
import './cart.css'
import cart from './assets/carrito.jpg'
import {  FaShoppingCart} from "react-icons/fa";


export const CartWidget = () => {
  return (
    <FaShoppingCart className="carrito"/>
  )
}

export default CartWidget