import React from 'react';
import Item from './Item'




const ItemList = ({items}) =>{
    return (
        <>
            <div className="row justify-content-around w-100">
                { items.map(item=>
                    <Item key={item.id} jsonpack={item} />
                )}
            </div>
        </>
    )
}

export default ItemList;
