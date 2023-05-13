import React, {useContext, useState} from 'react';
import {Card, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {ItemCount} from '../ItemCount/ItemCount'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export const ItemDetail = ({id, name, description, precio, img, category, stock}) => {

  const navigate = useNavigate()
  
  const volverHaciaAtras = () => {
    navigate(-1)
  }

  const {addToCart} = useContext(CartContext)

  const [counter, setCounter] = useState(0)

  const sumarAlCarrito = () => {
    const newItem = {
      id,
      name,
      description,
      img,
      precio,
      category,
      counter
    }
    console.log(newItem)
    addToCart(newItem)
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado',
      showConfirmButton: false,
      timer: 1000
    })
  }

  return (
    <div className='item'>
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{description}</Card.Title>
        <Card.Title>{precio}</Card.Title>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium facilis blanditiis quia eveniet facere iure earum? Iure at beatae iusto porro amet. Illo, soluta! Autem necessitatibus nostrum atque nesciunt voluptatibus!</p>
        <Card.Title>Marca: {category}</Card.Title>
        <ItemCount max={stock} modify={setCounter} cantidad={counter}/>
        <Button onClick={sumarAlCarrito}>Agregar al Carrito!</Button>    
      </Card.Body>
      <Button onClick={volverHaciaAtras} className='btn btn-sucess'>Volver atras!</Button>
      <Link to= '/cart' className='btn btn-info'>Ir al Carrito</Link>
    </Card>
    </div>
    
  )
}
