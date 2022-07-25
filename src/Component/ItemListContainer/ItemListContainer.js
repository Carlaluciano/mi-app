import ItemCount from "../ItemCount/ItemCount"
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";



export default function ItemListContainer(props){
    const [Productos, setProductos] = useState([]);

    //Promesa
    const getProductos = new Promise((resolve, reject) => {
        let condition = true
        setTimeout(() => {
            if(condition){
                resolve(Productos);
            }else{
                reject('Error');
            }
        }, 2000);
    })

 useEffect(() => {
    getProductos
    .then(res => setProductos(res))
    .catch(err => console.log(err))
})



    const handleOnAdd = (quantity) => {
        console.log("Agregando al carrito", quantity);
}

    return(
        <>
        <h1>{props.greeting}</h1>
        <ItemCount stock="15" initial={1} onAdd={handleOnAdd}/>
        <ItemList Productos={Productos}/>
       

        </>
         )
}
