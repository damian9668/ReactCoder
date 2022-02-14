import ItemList from "./ItemList";

import React, {useEffect, useState, } from 'react';
import { useParams } from "react-router-dom";
import Load from "../Loading";
import { doc, getFirestore,getDoc, collection,getDocs } from "firebase/firestore"



const ItemListContainer = (props) =>{

    const[items,setItems]=useState([])
    const[loading,setLoading] = useState(true)
    const { idCategoria } = useParams();


    useEffect(() => {

        const db  = getFirestore()

        //traer un elemento
        // const dbcollection = doc(db,"items","0DCNVFpDzNEkTGYjBllv")
        // getDoc(dbcollection)
        //     .then(resp => console.log(resp.data()))

        //traer una coleccion
        const queryCollection = collection(db,"items")
        getDocs(queryCollection)
            .then(resp => {
                const result = resp.docs.map(item =>{
                    return{id:item.id, ...item.data()}
                })
               // console.log(result, "soy  firebase")
                setItems( idCategoria ? result.filter(item => item.category === idCategoria) : result );
                //setItems(result)
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
