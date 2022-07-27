import { Card } from "react-bootstrap"





export default function ItemDetail({Producto}){
    return(
      <Card style={{ width: '18rem'  }}>
      <Card.Img variant="top" src={Producto.img} />
      <Card.Body>
        <Card.Title>{Producto.name}</Card.Title>
        <Card.Title>{Producto.description}</Card.Title>
        <Card.Title>{Producto.Stock}</Card.Title>
        <Card.Title>{Producto.price}</Card.Title>
       </Card.Body>
    </Card>
)
}