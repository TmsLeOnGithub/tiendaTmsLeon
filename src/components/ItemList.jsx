import Item from "./Item";

const ItemList = ({ productos }) => {

    return <>
        <div className="row">
            {productos.map(producto =>
                <Item producto={producto} key={producto.id}></Item>

            )}
        </div>
    </>
}

export default ItemList;
