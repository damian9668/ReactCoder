import {createContext, useState} from "react";

export const ItemContext = createContext()
const {Provider} = ItemContext

export const ProviderCustomizado = ({children}) => {

    const [carrito, setCarrito] = useState([]);
    //console.log(carrito, "estoy en context")
    // const [contador, setContador] = useState(0);
    // console.log(contador, "contador context")

    function agregarCarrito(item,cant){

        const duplicado = carrito.find(ele => ele.id === item.id)
        const index = carrito.findIndex(ele => ele.id === item.id)
        if(!duplicado){
            item.cant=cant
            setCarrito([...carrito,item])
        }else {
            carrito[index].cant+=cant
            setCarrito(carrito)
        }


    }

    const valorDelContexto = {
        carrito,
        setCarrito,
       // contador,
       // setContador,
        agregarCarrito
    }

    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


export default ItemContext