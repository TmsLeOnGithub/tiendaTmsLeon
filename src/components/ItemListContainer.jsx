
import ItemCount from './ItemCount';

function ItemListContainer() {
  const   onAdd = (cantidad) => {alert (`${cantidad} producto(s) añadidos`)}


    return ( <>
        <div className="ItemListContainer">
        <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
        </div>
        </>
    )
}

export default ItemListContainer;

