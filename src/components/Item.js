import React from "react";
import {Card} from 'react-bootstrap';

import ItemDetailContainer from "./ItemDetailContainer";

const Item =({jsonpack})=>{
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={jsonpack.pictureurl} />
                <Card.Body>
                    <Card.Title>{jsonpack.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Precio: {jsonpack.price}</Card.Subtitle>
                    <ItemDetailContainer item={jsonpack}/>
                </Card.Body>
            </Card>
        </>
    );
};

export default Item;
