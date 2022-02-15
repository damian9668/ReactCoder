import React from "react";
import {useNavigate} from "react-router-dom";


const Order =()=>{

    const navigate = useNavigate();

    function refreshPage() {
        navigate("/")
        window.location.reload(false);
    }
    return(
        <>
            <div className=" card container-fluid col-lg-6 ">
                <div className="card-header">
                    Orden Enviada
                </div>
                <div className="card-body">
                    <button onClick={refreshPage} className="btn btn-primary">Ir A Comprar</button>
                </div>
            </div>
        </>
    )
}

export default Order;