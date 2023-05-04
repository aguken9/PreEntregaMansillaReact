// import React, { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({max, cantidad, modify}) => {
    //const [counter, setCounter] = useState(0)

    const sumar = () =>{
        if (cantidad < max ){
            modify(cantidad + 1)
        }
    }

    const restar = () =>{
        if(cantidad> 0 ){
            modify(cantidad-1)
        }
    }
    
    //const resetear = () => {
      //  setCounter(0)
    //}
    return(
        <>
        <h4>{cantidad}</h4>
        <div className="btn">
            <button onClick={sumar}>➕</button>
            <button onClick={restar}>➖</button>
        </div>
        </>
    )
}


export default ItemCount