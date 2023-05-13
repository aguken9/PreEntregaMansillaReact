import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <nav>
    <div className="menu">
        <Link to="/">Inicio</Link>
        {/* <Link to="/counter">Contador</Link> */}
        <Link to='/productos/Vans'>Vans</Link>
        <Link to='/productos/Puma'>Puma</Link>
        <Link to='/productos/Nike'>Nike</Link>
        {/* <Link to="/pika">Pokemons</Link> */}
        <Link to='cart'><CartWidget/></Link>
    </div>
    </nav>
  )
}
