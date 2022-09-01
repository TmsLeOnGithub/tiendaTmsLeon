import ItemList from './ItemList';
import { useState, useEffect } from "react"
import { collection,getDocs, query, where } from "firebase/firestore"

import {useParams } from 'react-router-dom';
import {db} from '../assets/firebase.js';

function ItemListContainer() {
  const [listProductos, setListProductos] = useState([]) 
  const {idCategoria} = useParams()

  
  useEffect(() => {

    const productos = collection(db,"productos");

    const itemsCollection = idCategoria ? query(productos, where("categoria", "==", +idCategoria)): productos ;
    getDocs(itemsCollection).then((snapshot)=>{
      setListProductos (snapshot.docs.map((doc)=>({id: doc.id,...doc.data() })));
    });

  }, [idCategoria])


  return (<>
    <div className="p-2">
      <ItemList productos={listProductos}></ItemList>
    </div>
  </>
  )
}

export default ItemListContainer;



