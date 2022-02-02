import React from 'react';
import {useParams} from "react-router-dom";
import {Card} from "react-bootstrap";
import ItemCount from "./ItemCount";
import jsonpack from '../helpers/data.json';


const ItemDetail =()=>{

    const{id}=useParams()

    function onAdd(itemTemp){
    }
    const itemTemp = jsonpack.filter(x => x.id === id.toString());

    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={itemTemp[0].pictureurl} />
                <Card.Body>
                    <Card.Title>{itemTemp[0].title}</Card.Title>
                    <Card.Text>
                        {itemTemp[0].description}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Precio: {itemTemp[0].price}</Card.Subtitle>
                    <ItemCount stock={itemTemp[0].stock} initial={1}  onAdd={onAdd} item={itemTemp[0]}/>
                </Card.Body>
            </Card>
        </>
    )
};
export default ItemDetail;
