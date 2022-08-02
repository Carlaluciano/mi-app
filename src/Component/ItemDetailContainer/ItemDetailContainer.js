import {useState , useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getProductoById } from '../../Productos/Productos';   
import { Spinner } from 'react-bootstrap'; 
import '../ItemDetailContainer/ItemDetailContainer.css';



export default function ItemDetailContainer(){
    const [Producto, setProducto] = useState([]);
    const [Loading, setLoading] = useState(true);

    const {productoId} = useParams();
    
    useEffect(() => {
        getProductoById(productoId)
        .then(response => {setProducto(response)})
        .catch(err => console.log(err))
        .finally(() => setLoading(false)); 
    });

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