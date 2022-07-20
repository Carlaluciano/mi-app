import ItemCount from "../ItemCount/ItemCount"


export default function ItemListContainer(props){

    const handleOnAdd = (quantity) => {
    console.log("Agregando al carrito", quantity);
}

    return(
        <>
        <h1>{props.greeting}</h1>
        <ItemCount stock="15" initial={1} onAdd={handleOnAdd}/>
        </>
         )
}
