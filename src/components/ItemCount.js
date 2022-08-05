import react, { useState } from "react";
import Button from 'react-bootstrap/Button';


const useCounter = ({ stock, initial }) => {
    const [counter, setcounter] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);


    const agregar = () => setcounter(counter + 1)
    const quitar = () => { 
        if (counter > 0){
            setcounter(counter - 1)
        }
        
    }

    return {
        counter,
        itemStock,
        agregar,
        quitar,
    }
}


export default function ItemCount({ stock = 0, initial = 1, onAdd }) {
    const { counter, itemStock, agregar, quitar } = useCounter({ stock, initial });

    return (
        <>
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between">
              <Button className="w-25" variant="secondary" onClick={agregar}>+</Button>
                <div> {counter} </div>
                <Button className="w-25" variant="secondary" onClick={quitar}>-</Button>
              </div>
                
                <Button className="mt-3" variant="primary" disabled={counter>stock} onClick={() => onAdd(counter)
                }>Agregar al carrito</Button>
            </div>
        </>
    )
}