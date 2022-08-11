import ItemList from './ItemList';
import { useState, useEffect } from "react"

import { customFetch } from "../assets/customFetch";

import { productos } from "../assets/productos.js";
import ItemDetailContainer from './ItemDetailContainer';

function ItemListContainer() {
  const [listProductos, setListProductos] = useState([])

  useEffect(() => {
    customFetch(productos)
      .then(data => setListProductos(data)
      )
  }, [])


  return (<>
    <div className="p-2">
      <ItemList productos={listProductos}></ItemList>
    </div>


   <ItemDetailContainer></ItemDetailContainer>
  </>
  )
}

export default ItemListContainer;



