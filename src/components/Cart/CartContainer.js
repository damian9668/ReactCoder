import React, {useContext, useState} from 'react';
import ItemContext from "../../context/CartContext";
import Cart from "./Cart";
import CartEmpty from "./CartEmpty";
import {collection, getFirestore,addDoc, updateDoc, doc} from "firebase/firestore";
import Orden from "./Orden";
import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';





const CartContainer = () =>{

    const{setCount,setIdOrden}=useContext(ItemContext)

    const[ordenenviada, setOrdenenviada] = useState(false)
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/



    const {carrito}=useContext(ItemContext)
    let redirect = false

    if(carrito.length === 0){
        redirect = true

    }
    const realizarCompra = async (e) => {
       // e.preventDefault()

        let order = {}
        let Total = 0;

        order.buyer = {name: e.firstName,
                       email: e.email,
                       phone: e.phone}


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
            setCount(0)
            setIdOrden(Cartitem.id)
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
        setOrdenenviada(true)

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
                                    {/*Formik start*/}
                                    <Formik
                                        initialValues={{
                                            firstName: '',
                                            phone: '',
                                            email: ''
                                        }}
                                        validationSchema={Yup.object().shape({
                                            firstName: Yup.string()
                                                .required('Nombre Requerido'),
                                            phone: Yup.string()
                                                 .matches(phoneRegExp, 'Telefono Invalido')
                                                .required('Telefono Requerido'),
                                            email: Yup.string()
                                                .email('Email Invalido')
                                                .required('Email Requerido'),
                                        })}
                                        onSubmit={fields => {
                                            realizarCompra(fields);
                                            //console.log(fields)
                                        }}
                                        render={({ errors, status, touched }) => (
                                            <Form className="cart_section container-fluid col-lg-6 ">
                                                <div className="form-group row">
                                                    <label  htmlFor="inputName col-sm-2 col-form-label">Nombre</label>
                                                    <Field  name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="inputPhone">Telefono</label>
                                                    <Field name="phone" type="text" className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="email">Email</label>
                                                    <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                                </div>
                                                <div className="cart_buttons">
                                                    <button type="submit" className="button cart_button_checkout">Finalizar Compra</button>
                                                </div>
                                            </Form>
                                        )}
                                    />
                                    {/*Formik end*/}
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