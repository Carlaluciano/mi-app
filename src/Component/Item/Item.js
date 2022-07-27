import { Card, Button,} from "react-bootstrap"



export default function Item({Productos}){
    return(
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
      <Card style={{ width: '18rem'  }}>
      <Card.Img variant="top" src={Productos.img} />
      <Card.Body>
        <Card.Title>{Productos.name}</Card.Title>
        <Button variant="outline-secondary">Ver Mas</Button>
       </Card.Body>
    </Card>
    </div>
    </div>
</div>
)
}