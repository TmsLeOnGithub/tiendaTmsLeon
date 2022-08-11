import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from './ItemCount';

function Item({ producto }) {
  const { id, nombre, precio, stock } = producto;

  const onAdd = (cantidad) => { alert(`${cantidad} producto(s) añadidos`) }

  return (
    <div className='col-3'>
      <Card className='mr-2 mt-2'>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>${precio}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <ItemCount initial={0} stock={stock} onAdd={(cantidad) => onAdd(cantidad)}></ItemCount>
        </Card.Body>
      </Card>
    </div>

  );
}













export default Item;
