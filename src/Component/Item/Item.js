import { Card, Button } from "react-bootstrap"

export default function Item({Productos}){
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{Productos.name}</Card.Title>
        <Card.Text>
         {Productos.description}
        </Card.Text>
        <Card.Text>{Productos.price}</Card.Text>
        <Button variant="primary">Comprar</Button>
        <Button variant="primary">Ver Mas</Button>
      </Card.Body>
    </Card>
    )
}