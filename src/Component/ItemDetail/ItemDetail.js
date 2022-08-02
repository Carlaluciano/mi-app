import { Card,  } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"






export default function ItemDetail({Producto}){
const handleOnAdd = (quantity) => {
    console.log(quantity);
}

    return(
      <Card style={{ width: '18rem'  }}>
      <Card.Img  src={Producto.img} />
      <Card.Body>
        <Card.Title>{Producto.name}</Card.Title>
        <Card.Title>{Producto.description}</Card.Title>
        <Card.Title>Stock:{Producto.stock}</Card.Title>
        <Card.Title>Precio:${Producto.price}</Card.Title>
        <ItemCount stock={Producto.stock} initial={0} onAdd={handleOnAdd}/>
      
        </Card.Body>
    </Card>
)
}