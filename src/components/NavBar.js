import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidgets from './CartWidgets';
import {Link} from  "react-router-dom";


function NavBarMenu(){
    return (
        <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ProduccionesTMS</Navbar.Brand>
          <Nav className="me-auto">
         
            <Link to="/ventaLentes">Lentes</Link>
            <Link to="/VentaFiltros">Filtros</Link>
            <Link to="/VentaMicrofono">Micrófonos</Link>
          </Nav>

          <CartWidgets></CartWidgets>
        </Container>
      </Navbar>
      </>
    );
}

export default NavBarMenu;

