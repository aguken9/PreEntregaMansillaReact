import React, {useEffect, useState} from 'react';
import {ImSpinner3} from 'react-icons/im'
import { ItemList } from '../ItemList/ItemList';
import {pedirProductos} from '../../helpers/pedirProductos';
// import {stock} from '../../data/stock';

export const ItemListContainer = ({greating}) => {
  

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  


  useEffect(() => {
      setLoading(true)
      pedirProductos()
      .then((res)=>{
        setItems(res)
        console.log(res)
      })
      .catch((error) => console.log(error))
      .finally(()=>{setLoading(false)})

  }, [])
  
  return (
    <>
      {
        loading
        ?<ImSpinner3/>
        :<ItemList productos={items}/>
      }
    </>
  )
}
