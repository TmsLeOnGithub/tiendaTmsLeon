import react, { useState } from "react";
import Button from 'react-bootstrap/Button';

//.............................COMMITEADO LO DE ABAJO..................................
const useCounter = ({ stock, initial }) => {
    const [counter, setcounter] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);


    const agregar = () => setcounter(counter + 1)
    const quitar = () => { 
        if (counter > 0){
            setcounter(counter - 1)
        }
        
    }
    const resetear = () => setcounter(0)

    return {
        counter,
        itemStock,
        agregar,
        quitar,
        resetear,
    }
}


export default function ItemCount({ stock = 0, initial = 1, onAdd }) {
    const { counter, itemStock, agregar, quitar, resetear } = useCounter({ stock, initial });

    return (
        <>
            <div class="d-flex w-25 flex-column p-2">
              <div class="d-flex">
              <Button variant="secondary" onClick={agregar}>+</Button>
                <div> {counter} </div>
                <Button variant="secondary" onClick={quitar}>-</Button>
                 <Button variant="secondary" onClick={resetear}>zero</Button>
              </div>
                
                <Button variant="primary" disabled={counter>stock} onClick={() => onAdd(counter)
                }>Agregar al carrito</Button>
            </div>
        </>
    )
}