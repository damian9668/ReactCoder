import React from "react";
import "./Cart.css"

const Cart =({jsonpack})=>{
   // console.log(jsonpack)

    return(
        <div className="cart_items">
            <ul className="cart_list">
                <li className="cart_item clearfix">
                    <div className="cart_item_image"><img src={jsonpack.pictureurl}
                                                          alt=""/></div>
                    <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                        <div className="cart_item_name cart_info_col">
                            <div className="cart_item_title">Name</div>
                            <div className="cart_item_text card_title_width" >{jsonpack.title}</div>
                        </div>
                        <div className="cart_item_quantity cart_info_col">
                            <div className="cart_item_title">Quantity</div>
                            <div className="cart_item_text">{jsonpack.cant}</div>
                        </div>
                        <div className="cart_item_price cart_info_col">
                            <div className="cart_item_title">Price</div>
                            <div className="cart_item_text">{jsonpack.price}</div>
                        </div>
                        <div className="cart_item_total cart_info_col">
                            <div className="cart_item_title">Total</div>
                            <div className="cart_item_text">{jsonpack.cant * jsonpack.price}</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Cart

