import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react"
import {useParams } from 'react-router-dom';
import { doc, getDoc,collection } from "firebase/firestore";
import {db} from '../assets/firebase.js';


const ItemDetailContainer = (  ) => {
    const [producto, setProducto] = useState({})
    const {idItem} = useParams()
   
    useEffect(() => {
        const docRef = doc(db, "productos", idItem);
        getDoc(docRef)
        .then(producto => setProducto({id: producto.id, ...producto.data() }))
    }, [idItem])

    


    return (
        <ItemDetail producto={producto}></ItemDetail>
    )
}

export default ItemDetailContainer