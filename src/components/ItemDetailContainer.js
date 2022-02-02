
import React, {useState,useEffect} from 'react';
import {Navigate, Redirect, useParams} from "react-router-dom";
import {Link} from "react-router-dom";

const ItemDetailContainer = (props) => {

    return (
        <div className="container w-50">
            <Link className="btn btn-outline-primary btn-block" to={"/productos/"+props.item.id}>Detalle</Link>
        </div>
    )
}

export default ItemDetailContainer;
