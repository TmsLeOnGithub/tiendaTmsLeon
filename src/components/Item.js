import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom'

function Item({ producto }) {
  const { id, nombre, precio, stock } = producto;

  const onAdd = (cantidad) => { alert(`${cantidad} producto(s) añadidos`) }

  return (
    <div className='col-3'>
      <Card className='mr-2 mt-2'>
        <Card.Img variant="top" src="" />
        <Card.Body>
         <Link to={`/itemDetail/${id}`}><Card.Title>{nombre}</Card.Title></Link> 
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>${precio}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>

  );
}













export default Item;
