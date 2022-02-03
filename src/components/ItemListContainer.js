import ItemList from "./ItemList";
import jsonpack from '../helpers/data.json';
import React, {useEffect, useState, } from 'react';
import { useParams } from "react-router-dom";


const ItemListContainer = (props) =>{

    const[items,setItems]=useState([])
    const { idCategoria } = useParams();


    useEffect(() => {

        const call = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(jsonpack)
            },2000)
        })

        call.then(response=> {
            setItems( idCategoria ? response.filter(item => item.category === idCategoria) : response );
        })


    }, [idCategoria]);

    return(
        <div>
            <ItemList items={items}/>
        </div>
    )
}
export default ItemListContainer
