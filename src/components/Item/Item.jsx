import React from 'react'
import {Card, Button} from 'react-bootstrap'

export const Item = ({id, description, precio, img}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {img}/>
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Title>{description}</Card.Title>
        <Card.Title>{precio}</Card.Title>
        <Button variant="primary">Lo quiero</Button>
      </Card.Body>
    </Card>
    
  )
}
