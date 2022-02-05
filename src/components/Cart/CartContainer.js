import React, {useContext} from 'react';
import ItemContext from "../../context/CartContext";
import Cart from "./Cart";
import CartEmpty from "./CartEmpty";

const CartContainer = () =>{

    const {carrito}=useContext(ItemContext)
    let redirect = false
    //console.log(carrito)
    //console.log(contador)
    //console.log(carrito.length)
    if(carrito.length === 0){
        redirect = true
    }
    return(
        <>
            {redirect ? <CartEmpty/> : <div>
                <div className="cart_section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="cart_container">
                                    <div className="cart_title">Productos En Carrito</div>
                                    <div>
                                        { carrito.map(item=>
                                            <Cart key={item.id} jsonpack={item} />

                                        )}
                                    </div>
                                    <div className="order_total">
                                        <div className="order_total_content text-md-right">
                                            <div className="order_total_title">Total:</div>
                                            <div className="order_total_amount">{carrito.reduce((total,elemento) =>{
                                                return(
                                                    total+= elemento.price * elemento.cant
                                                )
                                            },0 )}</div>
                                        </div>
                                    </div>
                                    <div className="cart_buttons">
                                        <button type="button" className="button cart_button_checkout">Finalizar Compra</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> }
        </>
    )
}
export default CartContainer