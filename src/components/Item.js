import React from "react";
import {Card,Button} from 'react-bootstrap';
import ItemCount from "./ItemCount";

const Item =({jsonpack})=>{
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={jsonpack.pictureurl} />
                <Card.Body>
                    <Card.Title>{jsonpack.title}</Card.Title>
                    <Card.Text>
                        {jsonpack.description}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Precio: {jsonpack.price}</Card.Subtitle>
                    <ItemCount stock={jsonpack.stock} initial={1}  onAdd={onAdd} />
                </Card.Body>
            </Card>
        </>
    );
};
function onAdd(cant){
    console.log(cant);
}
export default Item;