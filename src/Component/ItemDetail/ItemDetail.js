
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react";
import "../Item/Item.css"
import { CartContext } from "../../Context/CartContext";



export default function ItemDetail({Producto}){
const [ quantity, setQuantity] = useState(0);
	
const { addToCart, getProductQuantity } = useContext(CartContext);
   
const quantityAdded = getProductQuantity (Producto.id);

 
    const handleOnAdd = (quantity) => {
      console.log('agregando al carrito');
      console.log(quantity);
      setQuantity(quantity)
      addToCart({Producto, quantity});
     
      
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
     { quantity > 0 ? <Link to='/cart' variant="outline-secondary">Ir al carrito</Link> : <ItemCount stock={Producto.stock} initial={quantityAdded} onAdd={handleOnAdd} />}
     </div>
    </div>
    
        
      
      
      
    )
}

   
    
    

