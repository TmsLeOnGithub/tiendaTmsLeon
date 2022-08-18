import { Children, createContext, useEffect } from "react";
import (createContext)

export const {provider} = createContext

const {provider}= CartContext

const myProvider = ({Children}) =>{
    const [cart,setCart] = useEffect ([])

    const isInCart =  (id) => {
     return cart.some (x => x.id === id)
    }

    const addItem = () => {}
}

export default myProvider