import React from 'react'
import './cart.css'
import cart from './assets/carrito.jpg'

export const CartWidget = () => {
  return (
    <div className="principal">
        <img src={cart} alt="cart-widget" className="img-principal"/>
        1
    </div>
  )
}

export default CartWidget