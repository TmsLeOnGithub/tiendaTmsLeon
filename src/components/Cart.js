import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import Button from 'react-bootstrap/Button';
import { addDoc, collection } from "firebase/firestore";

import Card from 'react-bootstrap/Card';
import CarritoVacio from "./carritoVacio";
import { db } from '../assets/firebase.js';


const Cart = () => {
    const [ordenId, setOrdenId] = useState(null);

    const { cart, eliminarProducto, calcularTotal } = useContext(CartContext)

    const enviarOrden = () => {
        const orden = {
            comprador: { nombre: "Agustin", telefono: "0344625878", email: "agtn@shemail" },
            productos: cart.map ((producto)=> {return {nombre: producto.nombre, cantidad: producto.cantidad, precio: producto.precio}}),
            fecha: new Date(),
            total: calcularTotal()
        };

        const orderCollection = collection(db, "ordenes");

        addDoc(orderCollection, orden).then(({ id }) => {
            setOrdenId(id);
            alert( "Su compra ha sido exitosa")
        });
    }


    if (cart.length > 0) {
        return (<div>
            {cart.map(producto =>
                <Card key={producto.id}>
                    <Card.Header as="h5">{producto.nombre} ${producto.precio}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Cantidad {producto.cantidad}
                        </Card.Text>
                        <Button variant="danger" onClick={() => eliminarProducto(producto.id)}>Eliminar Producto </Button>

                    </Card.Body>
                </Card>

            )}
            <h1>El precio total es $ {calcularTotal()}</h1>
            <Button variant="primary" size="lg" onClick={enviarOrden}>Terminar compra</Button>
        </div>)
    }

    return (
        <CarritoVacio />
    )
}

export default Cart