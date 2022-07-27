import {useState , useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {listaProductos} from '../../Productos/Productos';



export default function ItemDetailContainer(){
    const [Producto, setProducto] = useState([]);

    //Promesa
    const getProductoDetail = new Promise((resolve, reject) => {
        let condition = true
        setTimeout(() => {
            if(condition){
                resolve(listaProductos[1]);
            }else{
                reject('Error');
            }
        }, 2000);
    })

    useEffect(() => {
        getProductoDetail
        .then(res => setProducto(res))
        .catch(err => console.log(err))
    })

    return(
        <>
        <h2>Detalle del Producto</h2>
        <ItemDetail Producto={Producto}/>
        </>
    )
}