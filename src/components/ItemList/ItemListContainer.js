import ItemList from "./ItemList";
import jsonpack from '../../helpers/data.json';
import React, {useEffect, useState, } from 'react';
import { useParams } from "react-router-dom";
import Load from "../Loading";


const ItemListContainer = (props) =>{

    const[items,setItems]=useState([])
    const[loading,setLoading] = useState(true)
    const { idCategoria } = useParams();


    useEffect(() => {

        const call = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                setLoading(false)
                resolve(jsonpack)
            },2000)
        })

        call.then(response=> {
            setItems( idCategoria ? response.filter(item => item.category === idCategoria) : response );
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
