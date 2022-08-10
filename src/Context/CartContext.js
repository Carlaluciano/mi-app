import { useState, createContext, useEffect } from "react";

export const CartContext = createContext({});

 export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalProduct, setTotalProduct] = useState(0);
    const [totalToPay, setTotalToPay] = useState(0);

    useEffect(() => {
      totalProductAdd()
      totalToPayAdd()
    }, [cart]); // eslint-disable-line


    const addToCart = (productToAdd) => {
        if(!isInCart (productToAdd.id)){
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
  
      
     const totalProductAdd =() => {
      let total = 0;
      cart.forEach(product => {
        total += product.quantity;
      })
      setTotalProduct(total);
    }

    const totalToPayAdd = () => {
      let total = 0;
      cart.forEach(product => {
        total += product.quantity * product.price;
      })
      setTotalToPay(total);
    }

  
    const getQuantity = () => {
      let accu = 0;
        cart.forEach(prod => {
        accu += prod.quantity;
        }
        )
        return accu;
    }
    

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }


    const removeFromCart = (id) => {
       const newCart = cart.filter(prod => prod.id !== id);
        setCart(newCart);
    }

    const clearCart = () => {
        setCart([]);
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id);

      return product?.quantity;
    }


    return (
        <CartContext.Provider value={{ cart, totalProduct, totalToPay, addToCart, removeFromCart, isInCart, clearCart, getQuantity, getProductQuantity }}>
            {children}
        </CartContext.Provider>
    );
}
 

