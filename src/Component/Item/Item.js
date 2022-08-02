import { Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import '../Item/Item.css'



export default function Item({Productos}){
    return(

     <div className="container">
        <div className="card">
        <div className="titulo">
        <h2>{Productos.name}</h2>
      </div>
      <div>
        <img src={Productos.img} alt={Productos.name} className="imagen"/> 
      </div>
      <Link to={`/item/${Productos.id}`}> <Button variant="secondary">Ver Detalle</Button></Link>
    </div>
    </div>


    )
}


