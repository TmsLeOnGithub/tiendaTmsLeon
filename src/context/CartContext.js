import { createContext, useState } from "react";
import {productos} from "../assets/productos";

export const CartContext = createContext();

const { Provider } = CartContext;

const CustomProvider = (props) => {

const [cart,setCart]=useState([])

   const isInCart=(id)=>{
    return cart.some(producto => producto.id===id)
   }

   const agregarProducto = (producto) => {

    if(isInCart(producto.id)){
        const productoEncontrado = cart.find(p => p.id === producto.id);
        const index = cart.indexOf(productoEncontrado);
        const newArray = [...cart];
        newArray[index].cantidad += producto.cantidad;
        setCart(newArray);
    }else {
        setCart([...cart, producto])
    }
   }

   const eliminarProducto = (id) =>{
    return setCart (cart.filter (productos => productos.id !==id))
   }
   
   const vaciarCarrito=() =>{
    return setCart ([])
   }

   const cantidadCarrito=()=>{
    return cart.reduce ((acc,producto) => acc += producto.cantidad,0)
   }

   const calcularTotal =()=>{
    return cart.reduce ((acc,producto) => acc += producto.cantidad * producto.precio,0)
   }

    
    const valorDelContexto = {
        cantidadCarrito,
        cart,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
        calcularTotal
    }

    return (
        <Provider value={valorDelContexto}> 
        {props.children}
        </Provider>
    )

   // return <Provider value= {{cart,isIncart,vaciarCarrito,eliminarProducto,cantidadCarrito,obtenerPRecio}}>{children}</Provider>
}

export default CustomProvider

