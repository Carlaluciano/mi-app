
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import '../ItemListContainer/ItemListContainer.css'
import { getDocs, collection, query, where } from "firebase/firestore";
import { baseDatos } from "../../Service/Firebase/Index";
import { Spinner } from "react-bootstrap";





export default function ItemListContainer(props){
    const [Productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    
   
    const {categoryId} = useParams();


// Accediendo a los productos de la base de datos Firebase
useEffect(() => {
    setLoading(true)

    const collectionrefenrence = !categoryId
    ? collection (baseDatos, 'listaProductos')
    : query (collection (baseDatos, 'listaProductos'), where ('category', '==', categoryId));
     
    getDocs(collectionrefenrence).then(resp =>{
        const Productos = resp.docs.map(doc => {
            const valor = doc.data();
            return {id: doc.id, ...valor}
        })
       setProductos(Productos)
     }).catch(error =>{
            console.log(error)
        }).finally(() =>{
            setLoading(false)
        })


},[categoryId])

if(loading){
    return <Spinner className="spinner" animation="border" variant="secondary" />
}


      




 return(
        <>
        <div className="greeting">
        <h1>{props.greeting}</h1>
        </div>
       <ItemList Productos={Productos}/>
       

        </>
         )
}
