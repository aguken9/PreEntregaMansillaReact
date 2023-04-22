import React from 'react'
import {Card, Button} from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

export const ItemDetail = ({id, description, precio, img, category}) => {
  return (
    <div className='item'>
    <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Title>{description}</Card.Title>
        <Card.Title>{precio}</Card.Title>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium facilis blanditiis quia eveniet facere iure earum? Iure at beatae iusto porro amet. Illo, soluta! Autem necessitatibus nostrum atque nesciunt voluptatibus!</p>
        <Card.Title>Marca: {category}</Card.Title>
        <ItemCount/>
        <Button variant="primary">Agregar al Carrito!</Button>
      </Card.Body>
    </Card>
    </div>
    
  )
}
