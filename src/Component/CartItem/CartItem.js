import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'



export default function CartItems ({id, name, quantity, price, img, description}) {

    const {removeFromCart} = useContext(CartContext)

    const remove = (id) =>{
        removeFromCart(id)
    }

    
    return(
        <div className="cartItemsContainer">
            <div className='cartImgContainer'>
                <img src={img} alt='Foto producto'/>
            </div>
            <div className='cartItemsDesContainer'>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
            <div className='cartItemsPriceContainer'>
                <div>
                    <p>Precio Unitario:</p><span>${price}</span>
                </div>
                <div>
                    <p>Cantidad:</p><span>{quantity}</span>
                </div>
                <div>
                    <p>Subtotal:</p><span>${quantity * price}</span>
                </div>
            </div>
            <button onClick={() => remove(id)} className='cartItemsButtonContainer'>
                X
            </button>
        </div>
    )
}