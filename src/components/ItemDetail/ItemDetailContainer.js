import React, { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";


import jsonpack from '../../helpers/data.json';
import ItemDetail from './ItemDetail';
import Load from "../Loading";
import ItemList from "../ItemList/ItemList";


const ItemDetailContainer = () => {


    const[ item ,setItem  ] = useState([])
    const[loading,setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {

        const call = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                setLoading(false)
                resolve(jsonpack)
            },2000)
        })

        call.then(response=> {
            setItem(response.find(i => i.id === id));
        })
    }, [id]);


    return (
        <div>
            { loading ? <Load/> : (<div className="container w-50">
                <ItemDetail item = {item} />
            </div>) }
        </div>


    )
}

export default ItemDetailContainer;