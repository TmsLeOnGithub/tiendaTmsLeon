import { useContext } from "react"
import { productos } from "../assets/productos"
import { CartContext } from "../context/CartContext"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CarritoVacio from "./carritoVacio";


const Cart = () => {

    const { cart, eliminarProducto, calcularTotal } = useContext(CartContext)

    if (cart.length > 0) {
        return (<div>
            {cart.map(producto =>
                <Card>
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
            
        </div>)
    }

    return (
        <CarritoVacio/>
    )
}

export default Cart