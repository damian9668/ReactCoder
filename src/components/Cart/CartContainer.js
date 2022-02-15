import React, {useContext, useState} from 'react';
import ItemContext from "../../context/CartContext";
import Cart from "./Cart";
import CartEmpty from "./CartEmpty";
import {collection, getFirestore,addDoc, updateDoc, doc} from "firebase/firestore";
import Orden from "./Orden";


const CartContainer = () =>{

    const [datosorden, setDatosorden] = useState({name:"",email:"",phone:""});
    const[ordenenviada, setOrdenenviada] = useState(false)


    const {carrito}=useContext(ItemContext)
    let redirect = false

    if(carrito.length === 0){
        redirect = true

    }
    const realizarCompra = async (e) => {
        e.preventDefault()

        let order = {}
        let Total = 0;

        order.buyer = {name: datosorden.name,
                       email: datosorden.email,
                       phone: datosorden.phone}

        order.items = carrito.map(Cartitem =>{
            const id = Cartitem.id
            const nombre = Cartitem.title
            const precio = Cartitem.price
            const cantidad = Cartitem.cant

            Total += Cartitem.price * Cartitem.cant;
            order.total = Total
            //console.log(Total)
            //actualizar documento
            const db = getFirestore()
            const stockUpdate = doc(db, "items",Cartitem.id)
            updateDoc(stockUpdate, {stock: (Cartitem.stock - Cartitem.cant)})

            return{
                id,
                nombre,
                precio,
                cantidad
            }
        })
        //console.log(order)

        const db = getFirestore()
        const ordersCollection = collection (db,"orders")
        await addDoc(ordersCollection, order)
         //   .then(resp => console.log(resp))
       // console.log(datosorden)
        setOrdenenviada(true)

    }

   const onChange = e =>{
        setDatosorden({
            ...datosorden,
            [e.target.name]:e.target.value
        })
       // console.log(datosorden)
    }
    return(
        <>
            {redirect ? <CartEmpty/> : (ordenenviada ? <Orden/> :
                <div>
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
                                    <form className="cart_section container-fluid col-lg-6 ">
                                        <div className="form-group row">
                                            <label htmlFor="inputName" className="col-sm-2 col-form-label">Nombre</label>
                                            <div className="col-sm-10">
                                                <input onChange={e=>onChange(e)} name="name" type="text" className="form-control" id="inputName" placeholder="Nombre"/>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                                <div className="col-sm-10">
                                                    <input onChange={e=>onChange(e)} name="email" type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="inputPhone" className="col-sm-2 col-form-label">Telefono</label>
                                                <div className="col-sm-10">
                                                    <input onChange={e=>onChange(e)} name="phone" type="Phone" className="form-control" id="inputPhone" placeholder="Telefono"/>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="cart_buttons">
                                        <button type="button" onClick={realizarCompra} className="button cart_button_checkout">Finalizar Compra</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> )}
        </>
    )
}
export default CartContainer