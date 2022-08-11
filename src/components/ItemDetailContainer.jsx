import ItemDetail from "./ItemDetail";
import { getItem } from "../assets/getItem";
import { useState, useEffect } from "react"
import { productos } from "../assets/productos.js";

const ItemDetailContainer = (  ) => {
    const [producto, setProducto] = useState([])

    useEffect(() => {
      getItem(productos[0])
        .then(data => setProducto(data)
        )
    }, [])


    return (
        <ItemDetail producto={producto}></ItemDetail>
    )
}

export default ItemDetailContainer