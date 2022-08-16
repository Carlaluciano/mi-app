import { useState, createContext } from "react";

export const CartContext = createContext({});

 export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
  

   
const addToCart = (productToAdd) => {
        if(!inTheCart (productToAdd.id)){
        setCart([...cart, productToAdd]);
    }else {
      const cartUpdated = cart.map(prod => {
        if(prod.id === productToAdd.id){
         const productUpdated = {
              ...prod,
              quantity: productToAdd.quantity
         }
            return productUpdated;
      } else {
        return prod;
      }
    })
      setCart(cartUpdated)
      }}
  
      
    
    const getQuantityCart = () => {
      let accu = 0;
        cart.forEach(prod => {
        accu += prod.quantity;
        }
        )
        return accu;
    }
    

    const inTheCart = (id) => {
      return cart.some(prod => prod.id === id);
  }


    const removeFromCart = (id) => {
       const newCart = cart.filter(prod => prod.id !== id);
        setCart(newCart);
    }

    const cleanTheCart = () => {
        setCart([]);
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id);

      return product?.quantity;
    }

    const totalPrice = () =>{
      let index = 0
      cart.forEach(item =>{
          index += item.quantity * item.price
      })
      return index
  }

  

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, inTheCart, cleanTheCart, getQuantityCart, getProductQuantity, totalPrice  }}>
            {children}
        </CartContext.Provider>
    );
};

    



