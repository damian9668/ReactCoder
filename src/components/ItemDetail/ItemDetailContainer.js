import React, { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import Load from "../Loading";
import {doc, getDoc, getFirestore} from "firebase/firestore";



const ItemDetailContainer = () => {


    const[ item ,setItem  ] = useState([])
    const[loading,setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {


        const db  = getFirestore()

        const dbcollection = doc(db,"items",id)
        getDoc(dbcollection)
            .then(resp => {
                setLoading(false)
                const result = resp.data();
                result.id = resp.id
                setItem(result);
                //console.log(resp.data())
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