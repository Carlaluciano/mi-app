import Item from "../Item/Item";
import React from "react";

export default function ItemList({Productos}){
    return(
      <div>
      {Productos.map(producto => ( <Item key={Productos.id} Productos={Productos}/> ))}
      </div>
    )
}
