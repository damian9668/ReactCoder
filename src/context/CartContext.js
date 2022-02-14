import {createContext, useState} from "react";

export const ItemContext = createContext()
const {Provider} = ItemContext

export const ProviderCustomizado = ({children}) => {

    const [carrito, setCarrito] = useState([]);
    const [count, setCount] = useState(0)

    function agregarCarrito(item,cant){


        const duplicado = carrito.find(ele => ele.id === item.id)
        const index = carrito.findIndex(ele => ele.id === item.id)


        //console.log(carrito, item , "soy el carrito")
        if(!duplicado){

            item.cant=cant
            setCarrito([...carrito,item])
            setCount(count+1)

        }else {
            carrito[index].cant+=cant
            setCarrito(carrito)
        }


    }
    const eliminarCart =(id)=>{
        const carritoUpdate = carrito.filter(carrito => carrito.id !== id)
        setCarrito(carritoUpdate)
        setCount(count-1)
    }

    const valorDelContexto = {
        carrito,
        setCarrito,
        agregarCarrito,
        eliminarCart,
        count
    }

    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


export default ItemContext