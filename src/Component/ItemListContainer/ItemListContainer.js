
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { listaProductos } from "../../Productos/Productos";



export default function ItemListContainer(props){
    const [Productos, setProductos] = useState([]);

    //Promesa
    const getProductos = new Promise((resolve, reject) => {
        let condition = true
        setTimeout(() => {
            if(condition){
                resolve(listaProductos);
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



 return(
        <>
        <h1>{props.greeting}</h1>
       <ItemList Productos={Productos}/>
       

        </>
         )
}
