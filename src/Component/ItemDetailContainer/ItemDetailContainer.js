import {useState , useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap'; 
import '../ItemDetailContainer/ItemDetailContainer.css';
import { getDoc, doc} from 'firebase/firestore';
import { baseDatos } from '../../Service/Firebase/Index';


export default function ItemDetailContainer(){
    const [Producto, setProducto] = useState();
    const [Loading, setLoading] = useState(true);

    const {productoId} = useParams();
    
    useEffect(() => {
        getDoc(doc(baseDatos,'listaProductos', productoId)).then(resp =>{
            const valor = resp.data();
            const Producto = {id: resp.id, ...valor}
            setProducto(Producto)
            console.log(Producto)
             }).catch(error =>{
                console.log(error)
            }).finally(() =>{
                setLoading(false)
            });
    },[productoId]) 

    if(Loading){
        return <Spinner animation="border" variant="secondary" />
    }

    
    return(
        <>
        <div className="greeting">
        <h2>Detalle del Producto</h2>
        </div>
        <ItemDetail Producto={Producto}/>
        </>
    )
}