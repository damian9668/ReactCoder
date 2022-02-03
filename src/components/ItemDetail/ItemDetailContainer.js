import React, { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";


import jsonpack from '../../helpers/data.json';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {


    const[ item ,setItem  ] = useState([])
    const { id } = useParams();

    useEffect(() => {

        const call = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(jsonpack)
            },2000)
        })

        call.then(response=> {
            setItem(response.find(i => i.id === id));
        })
    }, [id]);


    return (
        <div className="container w-50">
            <ItemDetail item = {item} />
        </div>
    )
}

export default ItemDetailContainer;