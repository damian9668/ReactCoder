import React from "react";
import {Link} from "react-router-dom";

const CartEmpty =()=>{
    return(
        <>
            <div className="cart_title">Carrito Vacío</div>
            <Link className="btn btn-outline-primary btn-block" to={"/"}>Ir A Comprar</Link>
        </>
    )
}
export default CartEmpty