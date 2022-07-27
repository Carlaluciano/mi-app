import {useState} from 'react';
import { Button } from 'react-bootstrap';


export default function ItemCount({stock, initial, onAdd}){
    
     const [count, setCount] = useState(0);	//Inicializo en Count en 0

     const Increment = () => {
        if(count < stock){ //Si el count es menor que el stock
        setCount(count + 1);
      }}
    
        const Decrement = () => {
        if(count > initial){ //Si el count es mayor que el initial
            setCount(count - 1);
        }}
   

    return(
            <div className="row">
                <div className="col-md-6">

            <Button variant="outline-secondary" onClick={Increment}>+</Button>
            <p>{count}</p>
            <Button variant="outline-secondary" onClick={Decrement}>-</Button>
            <Button variant="outline-secondary" onClick={onAdd} disabled={stock===0|count===0?true:null}> Agregar al Carrito</Button>
        </div>
        </div>
 ) 
}


     
