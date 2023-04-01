import React from 'react'
import './navbar.css'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <nav>
    <div className="menu">
        <p>Ecommerce</p>
        <p>Nosotros</p>
        <p>Productos</p>
        <p>Contacto</p>  
    </div>
    <CartWidget/>
    </nav>
  )
}
