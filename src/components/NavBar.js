import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidgets from './CartWidgets';


function NavBarMenu(){
    return (
        <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ProduccionesTMS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#VentaLentes">Lentes</Nav.Link>
            <Nav.Link href="#VentaFiltros">Filtros</Nav.Link>
            <Nav.Link href="#VentaMicrofono">Micrófonos</Nav.Link>
          </Nav>

          <CartWidgets></CartWidgets>
        </Container>
      </Navbar>
      </>
    );
}

export default NavBarMenu;

