import ItemList from "./ItemList";

import React, {useEffect, useState, } from 'react';
import { useParams } from "react-router-dom";
import Load from "../Loading";
import { getFirestore,collection,getDocs } from "firebase/firestore"



const ItemListContainer = () =>{

    const[items,setItems]=useState([])
    const[loading,setLoading] = useState(true)
    const { idCategoria } = useParams();


    useEffect(() => {

        const db  = getFirestore()
        const queryCollection = collection(db,"items")
        getDocs(queryCollection)
            .then(resp => {
                const result = resp.docs.map(item =>{
                    return{id:item.id, ...item.data()}
                })
                setItems( idCategoria ? result.filter(item => item.category === idCategoria) : result );
                setLoading(false)
            })


    }, [idCategoria]);

    return(
        <div>
            { loading ? <Load/> : (<div className="d-flex container-fluid">
                <ItemList items={items}/>
            </div>) }
        </div>

    )
}
export default ItemListContainer
