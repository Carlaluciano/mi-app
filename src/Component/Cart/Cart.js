import CartItems from '../CartItem/CartItem';
import { CartContext } from '../../Context/CartContext.js';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




export default function Cart() {
        
        const {cart, totalPrice, cleanTheCart } = useContext(CartContext);

        
        const totalPriceCart = totalPrice();

        /*const newOrder = () => {
          const order = {
           buyer:{
            nombre: "Carla Luciano",
            telefono: "2477357326",
            email: 'carla.luciano@hormail.com'
        },
           items: cart,
           total: totalPriceCart,
           date: Timestamp.fromDate(new Date())
           
           

          }
         
         addDoc(collection(baseDatos, 'orders'), order).then (response => {
            console.log(response)
         })
        }*/


     
        return(
         <div className="cart-container">
                <div className="cart-header">
                    <h1>Carrito de Compras</h1>
                    <p>{cart.length} productos</p>
                    <p>Total: ${totalPriceCart}</p>
                    </div>
                <div className="cart-items">
                    {cart.map(product => (
                        <CartItems key={product.id} {...product} />
                    ))}
                    <Button variant="outline-secondary" onClick={cleanTheCart} >Vaciar Carrito</Button>
                    <Link to='/checkout' className='Option'>Checkout</Link>
                </div>
            </div>
    
      
  )
}    
        
       
    
    


