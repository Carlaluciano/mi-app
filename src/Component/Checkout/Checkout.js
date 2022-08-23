import { addDoc, collection, getDocs, Timestamp, query, where, documentId, writeBatch } from 'firebase/firestore'
import { baseDatos } from '../../Service/Firebase/Index'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../Context/CartContext'
import { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import { Form } from 'react-bootstrap'


export default function Checkout(){
    const [compra, setCompra] = useState(0)
    const [numeroOrden, setNumeroOrden] = useState("")
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState(0);
    const [mail, setMail] = useState("");
const { cart, totalPriceCart, cleanTheCart } = useContext(CartContext)

if(compra ===1){
    return(
        <div>
        <h1>Muchas gracias por confiar en nosotros, {nombre}</h1>
        <h2>Su Numero de Orden es : #{numeroOrden}</h2>
    </div>)
    
}


const newOrder = async () => {
try{

const order = {
     buyer:{
      nombre: nombre,
      telefono: telefono,
      email: mail
  },
     items: cart,
     total: totalPriceCart,
     date: Timestamp.fromDate(new Date())
     
     }
   
     const id = cart.map(product => product.id)

     const ref = collection(baseDatos, 'listaProductos')

     const productFromFirestore = await getDocs(query(ref, where(documentId(), 'in', id)))
     //console.log(productFromFirestore)
     
     const { docs } = productFromFirestore

     const noStock = []

     const batch = writeBatch(baseDatos)

     docs.forEach(doc =>{
        const dataDoc = doc.data()

        const stockbaseDatos = dataDoc.stock
        
        const productAdded = cart.find(prod => prod.id === doc.id)

        const productCant = productAdded?.quantity

        if(stockbaseDatos >= productCant){
          batch.update(doc.ref, {stock: stockbaseDatos - productCant})  
        }else {
        noStock.push({id: doc.id, ...dataDoc})
        }
     })

     if(noStock.length === 0) {
        const orderRef = collection(baseDatos, 'orders')

        const orderAdd = await addDoc(orderRef, order)
        batch.commit()
        console.log(orderAdd.id)
        cleanTheCart()
        setNumeroOrden(orderAdd.id)
        setCompra(1)
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Uy! algo salio mal',
            text: 'No hay Stock del Articulo que desea comprar',
          })
    }
} catch(error){
    console.log(error)
}finally{
    console.log('Ya no se ejecuta la Orden')
}

}


  return(
   
<Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="nombre" placeholder="Ingrese Nombre" onChange={(e) => {setNombre(e.target.value);}} />
        <Form.Text className="text-muted">
         No compartiremos sus datos con nadie.
        </Form.Text>
      </Form.Group> 

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="telefono" placeholder="Ingrese Telefono" onChange={(e) => {setTelefono(e.target.value);}}/>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="Email" placeholder="Ingrese Email" onChange={(e) => {setMail(e.target.value);}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="outline-secondary" onClick={newOrder}>Realizar compra</Button>
    </Form>
   
  )
}



