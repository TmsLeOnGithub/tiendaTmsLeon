import { useContext } from "react"
import { NavLink } from "react-router-dom";
import {CartContext}   from "../context/CartContext"


function CartWidgets() {
   
   const {cantidadCarrito} = useContext(CartContext)
   
    return (
        <>
            <NavLink to="/cart">
                <span className="material-symbols-outlined">
                    shopping_cart
                </span>
               {cantidadCarrito() }
            </NavLink>

        </>
    )

}

export default CartWidgets;