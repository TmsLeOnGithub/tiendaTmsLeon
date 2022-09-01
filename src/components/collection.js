import {addDoc, collection,getFirestore} from "firebase/firestore";

import { CartContext } from "../context/CartContext"

const enviarOrden =() =>{
    orden = {
        comprador: { nombre: "Agustin", telefono:"0344625878", email: "agtn@shemail"},
        producto: [{nombre: producto.nombre, precio: producto.precio}],
        total:100
    };
    const db = getFirestore
    const orderCollection=collection (db,"ordenes")

    addDoc (orderCollection,orden) .then (({id})=> setOrdenId (id));
}

export default collection