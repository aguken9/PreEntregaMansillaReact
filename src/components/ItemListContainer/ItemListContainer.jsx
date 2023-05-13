import React, {useEffect, useState} from 'react';
import {ImSpinner3} from 'react-icons/im'
import { ItemList } from '../ItemList/ItemList';
//import {pedirProductos} from '../../helpers/pedirProductos';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/config';
// import {stock} from '../../data/stock';

export const ItemListContainer = ({greating}) => {
  

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  
const {categoryId} = useParams()
  

  useEffect(() => {
      // setLoading(true)
      // // pedirProductos()
      // .then((res)=>{
      //   if (categoryId){
      //     setItems(res.filter(prod => prod.category === categoryId))
      //   }else {
      //     setItems(res)
      //   }
        
      //   //console.log(res)
      // })
      // .catch((error) => console.log(error))
      // .finally(()=>{setLoading(false)})
      setLoading(true)
      const db = getFirestore();
      const productos = db.collection('productos')

      if(categoryId){
        const filtrado = productos.where("category", "==", categoryId)
        filtrado.get()
          .then((res)=>{
            const newItem = res.docs.map((doc) =>{
              return{id: doc.id, ...doc.data()}
            })
            setItems(newItem)
          })
          .catch((err) => console.log(err))
          .finally(()=>{
            setLoading(false)
          })
          
      }else{

        productos.get()
        .then((res) => {
          const newItem = res.docs.map((doc) =>{
            return {id: doc.id, ...doc.data()}
          })
          console.table(newItem)
          setItems(newItem)
        })
        .catch((error) => console.log(error))
        .finally(()=>{
          setLoading(false)
        })
      }
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
