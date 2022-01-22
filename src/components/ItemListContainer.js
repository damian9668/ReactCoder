import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) =>{

    return(
        <div>
            <h3>{props.greeting}</h3>
            <ItemCount stock={5} initial={1}  onAdd={onAdd} />
        </div>
    )
}
function onAdd(cant){
    console.log(cant);
}
export default ItemListContainer