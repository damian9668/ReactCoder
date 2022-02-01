import ItemList from "./ItemList";
import jsonpack from '../helpers/data.json';
import React, {useState} from 'react';

const ItemListContainer = (props) =>{

    const[item,setItems]=useState([])
    const call = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(jsonpack)
        },2000)
    })

    call.then(response=> {
        setItems(response)
        console.log(item[0].category,"soy item")
    })




    return(
        <div>
            <h3>{props.greeting}</h3>
            <ItemList items={item}/>
        </div>
    )
}
export default ItemListContainer
