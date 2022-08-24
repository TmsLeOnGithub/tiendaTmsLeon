import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

import { useContext, useState } from 'react';
import {CartContext}   from "../context/CartContext"


import ItemCount from './ItemCount';

function ItemDetail({ producto }) {
    const { id, image, nombre, descripcion, stock } = producto;
    const [cantidad, setCantidad] = useState(0);

    const {agregarProducto } = useContext(CartContext)

    const onAdd = (contador) => {
        setCantidad(contador);
        producto.cantidad = contador;
        agregarProducto(producto);
    }

    return <Container>
        <Row>
            <Col>
                <h4> {nombre} </h4>
                <p>{descripcion}</p>
            </Col>
            <Col>
                <img width={300} src={image}></img>
            </Col>
        </Row>
        <Row>
            {!cantidad && <ItemCount initial={0} stock={stock} onAdd={(counter) => onAdd(counter)}></ItemCount>}
            {!!cantidad && <Link to={'/cart'}><Button variant='primary'>Finalizar compra</Button></Link>}
        </Row>
    </Container>
}





export default ItemDetail