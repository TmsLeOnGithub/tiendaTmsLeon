import ItemDetail from "./ItemDetail";
import { getItem } from "../assets/getItem";
import { useState, useEffect } from "react"
import { productos } from "../assets/productos.js";
import {useParams } from 'react-router-dom';

const ItemDetailContainer = (  ) => {
    const [producto, setProducto] = useState({})
    const {idItem} = useParams()
   
    useEffect(() => {
      getItem(productos, +idItem)
        .then(data => setProducto(data))
    }, [idItem])


    return (
        <ItemDetail producto={producto}></ItemDetail>
    )
}

export default ItemDetailContainer