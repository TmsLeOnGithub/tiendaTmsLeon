import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function NavBarMenu(){
    return (
        <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ProduccionesTMS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Lentes</Nav.Link>
            <Nav.Link href="#features">Filtros</Nav.Link>
            <Nav.Link href="#pricing">Micrófonos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    );
}

export default NavBarMenu;


