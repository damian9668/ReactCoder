import ItemDetail from './ItemDetail';
import React, {useState,useEffect} from 'react';

const ItemDetailContainer = () => {

    const[productos,setProductos]=useState()
    useEffect(()=>{

        setTimeout(()=>{
            fetch("https://api.mercadolibre.com/sites/MLA/search?q=electronica&limit=1")
                .then(response=>response.json())
                .then(data=>setProductos(data.results));
        },2000)

    },[]);

    return (
        <div className="d-flex flex-row d-flex justify-content-around mt-4">
            {
                productos &&  productos.map(item=>
                    <ItemDetail key={item.id} jsonpack={item} />
                )}
        </div>
    )
}

export default ItemDetailContainer;
