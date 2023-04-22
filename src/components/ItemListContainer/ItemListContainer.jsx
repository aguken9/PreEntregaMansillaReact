import React, {useEffect, useState} from 'react';
import {ImSpinner3} from 'react-icons/im'
import { ItemList } from '../ItemList/ItemList';
import {pedirProductos} from '../../helpers/pedirProductos';
import { useParams } from 'react-router-dom';
// import {stock} from '../../data/stock';

export const ItemListContainer = ({greating}) => {
  

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  
const {categoryId} = useParams()
  

  useEffect(() => {
      setLoading(true)
      pedirProductos()
      .then((res)=>{
        if (categoryId){
          setItems(res.filter(prod => prod.category === categoryId))
        }else {
          setItems(res)
        }
        
        //console.log(res)
      })
      .catch((error) => console.log(error))
      .finally(()=>{setLoading(false)})

  }, [categoryId])
  
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
