import {useContext, useState} from 'react';
import ItemContext from "../context/CartContext";

function ItemCount({initial, stock, onAdd, item}) {
    const [contador, setcontador] = useState(initial);
    const {agregarCarrito} = useContext(ItemContext);

    const handleAumentar=()=>{
        if (contador < stock) {
            setcontador(contador + 1)
            console.log("sumado")
        }
    }

    const handlerRestar=()=>{
        if (contador > initial) {
            setcontador(contador - 1)
            console.log("restado")
        }
    }

    const agregar=()=>{
        console.log(item,"agregado")

        agregarCarrito(item,contador)
        //console.log(carrito, "carrito")

    }

    return (
        <div className="container w-50">
            <button className="btn btn-outline-primary" onClick={handleAumentar}> + </button>
            { contador }
            <button className="btn btn-outline-primary" onClick={handlerRestar}> - </button><br/>
            <button className="btn btn-outline-primary btn-block" onClick={agregar} >Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;
