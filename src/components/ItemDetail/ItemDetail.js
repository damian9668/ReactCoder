import React from 'react';
import {Card} from "react-bootstrap";
import ItemCount from "./ItemCount";


const ItemDetail =({ item })=>{

    const { title, description, price, pictureurl, stock } = item;

    return(
        <>
            <div className="d-flex flex-row d-flex justify-content-around mt-4">
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={pictureurl} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">Precio: {price}</Card.Subtitle>
                        <ItemCount stock={stock} initial={1}  item={item}/>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
};
export default ItemDetail;

