import {useContext, useState} from 'react';
import ItemContext from "../../context/CartContext";
import {Link} from "react-router-dom";

function ItemCount({initial, stock, item}) {
    const [contador, setcontador] = useState(initial);
    const {agregarCarrito} = useContext(ItemContext);
    const [mostrarComponente, setMostrarComponente] = useState(true);

    const handleAumentar=()=>{
        if (contador < stock) {
            setcontador(contador + 1)
           // console.log("sumado")
        }
    }

    const handlerRestar=()=>{
        if (contador > initial) {
            setcontador(contador - 1)
           // console.log("restado")
        }
    }

    const agregar=()=>{
        //console.log(item,"agregado")
        agregarCarrito(item,contador)
        setMostrarComponente(!mostrarComponente)
    }

    return (
        <div className="container w-50">


            {mostrarComponente ? ( <>
                <button className="btn btn-outline-primary" onClick={handleAumentar}> + </button>
                { contador }
                <button  className="btn btn-outline-primary" onClick={handlerRestar}> - </button><br/>
                <button  className="btn btn-outline-primary btn-block" onClick={agregar} >Agregar al carrito</button>
            </>) : <Link  className="btn btn-outline-primary btn-block" to="/cart">Ir Al Carrito</Link>}

        </div>
    )
}

export default ItemCount;
