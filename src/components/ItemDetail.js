import React from 'react';
import {Card} from 'react-bootstrap';
import ItemCount from "./ItemCount";

const ItemDetail =({jsonpack})=>{
    console.log(jsonpack);
    return(
        <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={jsonpack.thumbnail} />
                    <Card.Body>
                        <Card.Title>{jsonpack.title}</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">Precio: {jsonpack.price}</Card.Subtitle>
                        <ItemCount stock={jsonpack.available_quantity} initial={1} />
                    </Card.Body>
                </Card>
        </>

    )
};
export default ItemDetail;
