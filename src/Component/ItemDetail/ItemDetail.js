
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react";
import "../Item/Item.css"



export default function ItemDetail({Producto}){
const [count, setCount] = useState(0);	
 
   
 
 const handleOnAdd = (count) => {
     setCount(count);
    }

    return(

      <div className="itemdetail-container">
        <div className="card">
        <div className="titulo">
        <h2>{Producto.name}</h2>
      </div>
      <div>
        <img src={Producto.img} alt={Producto.name} className="imagen"/> 
      </div>
      <div className="descripcion">
       <p>{Producto.description}</p>
       <p>Stock:{Producto.stock}</p>
       <p>Precio:${Producto.price}</p>
     </div>
     { count > 0 ? <Link to='/cart'>Ir al Carrito</Link> : <ItemCount stock={Producto.stock} initial={1} onAdd={handleOnAdd} />}
     </div>
    </div>
    
        
      
      
      
    )
}

   
    
    

