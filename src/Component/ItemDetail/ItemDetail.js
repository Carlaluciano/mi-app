
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react";
import "../Item/Item.css"
import { CartContext } from "../../Context/CartContext";



export default function ItemDetail({img, price, description, stock, name, id}){
const [ quantity, setQuantity] = useState(0);
	
const { addToCart, getProductQuantity } = useContext(CartContext);
   
const quantityAdded = getProductQuantity (id);

 
    const handleOnAdd = (quantity) => {
      setQuantity(quantity)
      addToCart({img, price, description, stock, name, id, quantity});
     
      
    }

    return(

      <div className="itemdetail-container">
        <div className="card">
        <div className="titulo">
        <h2>{name}</h2>
      </div>
      <div>
        <img src={img} alt={name} className="imagen"/> 
      </div>
      <div className="descripcion">
       <p>{description}</p>
       <p>Stock:{stock}</p>
       <p>Precio:${price}</p>
     </div>
     { quantity > 0 ? <Link to='/cart' variant="outline-secondary">Ir al carrito</Link> : <ItemCount stock={stock} initial={quantityAdded} onAdd={handleOnAdd} />}
     </div>
    </div>
    
        
      
      
      
    )
}

   
    
    

