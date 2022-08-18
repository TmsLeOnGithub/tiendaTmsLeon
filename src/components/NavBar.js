import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidgets from './CartWidgets';
import {NavLink} from  "react-router-dom";


function NavBarMenu(){
    return (
        <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">ProduccionesTMS</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/categoria/1">Lentes</NavLink>
            <NavLink to="/categoria/2">Filtros</NavLink>
            <NavLink to="/categoria/3">Micrófonos</NavLink>
        
          </Nav>
          <CartWidgets  href="https://www.whatsapp.com/?lang=es%E2%80%9D_blank%3EWHATSAPP"></CartWidgets>
        </Container>
      </Navbar>
      </>
    );
}

export default NavBarMenu;

