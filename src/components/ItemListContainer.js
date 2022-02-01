import ItemList from "./ItemList";
import jsonpack from '../helpers/data.json';
import React, {useState} from 'react';

const ItemListContainer = (props) =>{

    const[items,setItems]=useState([])

    const call = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(jsonpack)
        },2000)
    })

    call.then(response=> {
        setItems(response.filter(item => item.category=== props.categoria))
        //console.log(item[0].category,"soy item")
    })




    return(
        <div>
            <h3>{props.greeting}</h3>
            <ItemList items={items}/>
        </div>
    )
}
export default ItemListContainer
