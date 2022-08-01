import react, { useState } from "react";

const useCounter = () => {
    const [counter, setcounter] = useState(0);

    const agregar = () => setcounter(counter + 1)
    const quitar = () => setcounter(counter - 1)
    const resetear = () => setcounter(0)

    return {
        counter,
        agregar,
        quitar,
        resetear,
    }
}


export default function ItemCount() {
    const { counter, agregar, quitar, resetear } = useCounter();

    return (
        <>

            <div> {counter} </div>
            <button onClick={agregar}>+</button>
            <button onClick={quitar}>-</button>
            <button onClick={resetear}>zero</button>
        </>
    )
}





