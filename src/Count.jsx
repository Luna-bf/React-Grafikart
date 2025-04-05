import { useState } from "react";

function Count() {

    {/*On a un tableau avec deux éléments :
        - La valeur à incrementer (ici count)
        - Un setter qui va nous permettre d'incrémenter cette valeur (ici setCount)
    */}
    const [count, setCount] = useState(0); {/*La valeur initiale de useState sera toujours zéro*/}

    const increment = () => {

    }

    return <>
        <p>Compteur : {count}</p>
        <button onClick={increment}>Incrémenter</button>
    </>
}

export default Count