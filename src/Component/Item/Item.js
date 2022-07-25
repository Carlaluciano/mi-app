import { Card, Button,} from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"


export default function Item({Productos}){
    return(
      <Card style={{ width: '18rem'  }}>
      <Card.Img variant="top" src={Productos.img} />
      <Card.Body>
        <Card.Title>{Productos.name}</Card.Title>
        <Card.Text>
         {Productos.description}
        </Card.Text>
        <Card.Text>{Productos.price}</Card.Text>
        <Button variant="primary">Ver Mas</Button>
        <ItemCount stock={Productos.stock} initial={0} onAdd={()=>{}}/>
      </Card.Body>
    </Card>
)
}