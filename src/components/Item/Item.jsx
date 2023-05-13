import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Item = ({id, name, description, precio, img, category}) => {
  return (
    <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src= {img}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{description}</Card.Title>
        <Card.Title>{precio}</Card.Title>
        <Card.Title>Marca: {category}</Card.Title>
        <Link to={`/detail/${id}`}>
          <Button variant="primary">Ver más Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
    
  )
}
