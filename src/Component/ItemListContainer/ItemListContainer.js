
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { listaProductos } from "../../Productos/Productos";
import { useParams } from "react-router-dom";
import {  getProductoByCategory } from "../../Productos/Productos";
import '../ItemListContainer/ItemListContainer.css'





export default function ItemListContainer(props){
    const [Productos, setProductos] = useState([]);
    
   
    


    const {categoryId} = useParams();

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
    if(categoryId){
        getProductoByCategory(categoryId)
        .then(res => setProductos(res))
        .catch(err => console.log(err))
        
    
    }else{
        getProductos
        .then(res => setProductos(res))
        .catch(err => console.log(err))
        

        
    }


   
   
  
});



 return(
        <>
        <div className="greeting">
        <h1>{props.greeting}</h1>
        </div>
       <ItemList Productos={Productos}/>
       

        </>
         )
}
