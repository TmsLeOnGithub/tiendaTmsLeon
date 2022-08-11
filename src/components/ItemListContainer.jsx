import ItemList from './ItemList';
import { useState, useEffect } from "react"

import {useParams } from 'react-router-dom';

import { customFetch } from "../assets/customFetch";

import { productos } from "../assets/productos.js";

function ItemListContainer() {
  const [listProductos, setListProductos] = useState([]) 
  const {idCategoria} = useParams()

  
  useEffect(() => {
    customFetch(productos, +idCategoria)
      .then(data => setListProductos(data)
      )
  }, [idCategoria])


  return (<>
    <div className="p-2">
      <ItemList productos={listProductos}></ItemList>
    </div>
  </>
  )
}

export default ItemListContainer;



