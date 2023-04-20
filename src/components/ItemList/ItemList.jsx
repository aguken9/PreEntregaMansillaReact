import React from 'react'
import { Item } from '../Item/Item'
import './itemList.css'
//import { pedirProductos } from '../../helpers/pedirProductos'

export const ItemList = ({productos=[]}) => {
  return (
    <div className='container'>
        <h3>Nuestros Productos</h3>
        <div className='fila'>
            {productos.map((item) => <Item{...item} key= {item.id} />)}
        </div>
    </div>
  )
}
