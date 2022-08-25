import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {NavLink} from  "react-router-dom";

function CarritoVacio() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/travoltafoto.jpg" />
      <Card.Body>
        <Card.Title>Carrito vacio</Card.Title>
        <Card.Text>
         No hay nada que comprar
        </Card.Text>
        <NavLink to="/categoria/1"> <Button  variant="primary">Ir a productos</Button></NavLink>
       
      </Card.Body>
    </Card>
  );
}

export default CarritoVacio