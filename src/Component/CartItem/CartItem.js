import '../CartItem/CartItem.css'



export default function CartItems ({id, name, quantity, price, img, description}) {



  

    
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
           
        </div>
    )
}