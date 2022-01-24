import React from 'react';
import Item from './Item'


const ItemList = ({items}) =>{
    console.log(items);
    return (
        <>
            <div className="d-flex flex-row d-flex justify-content-around mt-4">

                { items.map(item=>

                    <Item key={item.id} jsonpack={item} />
                )}

            </div>

        </>

    )
}

export default ItemList;