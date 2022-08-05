import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from './ItemCount';


function Item({producto}) {

  const onAdd = (cantidad) => { alert(`${cantidad} producto(s) añadidos`) }

  return (
    <div className='col-3'>
<Card className='mr-2 mt-2'>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>

        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{producto.precio}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <ItemCount initial={0} stock={producto.stock}></ItemCount>
      </Card.Body>
    </Card>
    </div>
    
  );
}

export default Item;
