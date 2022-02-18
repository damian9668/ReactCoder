import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import ItemContext from "../../context/CartContext";


const Order =()=>{

    const navigate = useNavigate();
    const {idOrden} = useContext(ItemContext);
    function refreshPage() {
        navigate("/")
        window.location.reload(false);
    }
    return(
        <>
            <div className=" card container-fluid col-lg-6 ">
                <div className="card-header">
                    <h1>Orden Enviada</h1>
                </div>

                <div className="card-body">
                    <h3>Su Id De Orden Es: "{idOrden}"</h3>
                    <button onClick={refreshPage} className="btn btn-primary">Ir A Comprar</button>
                </div>
            </div>
        </>
    )
}

export default Order;