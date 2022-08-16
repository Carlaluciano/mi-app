import CartItems from '../CartItem/CartItem';
import { CartContext } from '../../Context/CartContext.js';
import { useContext } from 'react';






        
       export default function Cart(id, name, price, img, stock, description) {
        
        const {cart, totalPrice, clearAllCart } = useContext(CartContext);

        
        const totalPriceCart = totalPrice();

   return(
      <div className="CartContainer">
          {cart.map(p => <CartItems key={p.id} {...p}/>)}
          <div className='cartInfoContainer'>
              <div className='cartTextContainer'>
                  <h3>El precio total es:</h3><span>${totalPriceCart}</span>
              </div>
              <div className='cartButtonContainer'>
                  <button>Generar orden de compra</button>
                  <button onClick={()=>clearAllCart()}>Vaciar el carrito</button>
              </div>
          </div>
          
      </div>
  )
}    
        
       
    
    


