import {useState} from 'react';
import { Button } from 'react-bootstrap';


export default function ItemCount(stock, initial, onAdd){
    
     const [count, setCount] = useState(0);	//Inicializo en Count en 0

     const Increment = () => {
        if(count < stock){ //Si el count es menor que el stock
            setCount(count + 1);
        }
     }
    
    

        const Decrement = () => {
        if(count > initial){ //Si el count es mayor que 1
            setCount(count - 1);
        }
     }
        
      

    return(
        <div>
            <Button onClick={Increment}>+</Button>
            <p>{count}</p>
            <Button onClick={Decrement}>-</Button><br/>
            <Button onClick={onAdd}> Agregar al Carrito</Button>
        </div>
     

    ) 
}
