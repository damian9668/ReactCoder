import React from "react";
import {Card} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Item =({jsonpack})=>{

    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={jsonpack.pictureurl} />
                <Card.Body>
                    <Card.Title>{jsonpack.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Precio: {jsonpack.price}</Card.Subtitle>
                    <Link to={`/productos/${jsonpack.id} `} >
                        <button className="btn btn-outline-primary btn-block">
                            Detalle
                        </button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default Item;
