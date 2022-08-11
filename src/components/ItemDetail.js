import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ItemDetail({ producto }) {
    const { id, image, nombre, descripcion } = producto;

    return <>
    <Container>
        <Row>
        <Col>  
        
            <h4> {nombre} </h4> 
            <p>{descripcion}</p>
        </Col>
        <Col> 
        <img width={300} src={image}></img>
        </Col>
        </Row>


    </Container>
        
        
    </>
}


 


export default ItemDetail