import { useState } from "react";

function Count() {

    {/*On a un tableau avec deux éléments :
        - La valeur à incrementer (ici count)
        - Un setter qui va nous permettre de changer cette valeur (ici setCount)
    */}
    const [count, setCount] = useState(0); {/*La valeur initiale de useState sera toujours zéro*/}

    const increment = () => {
        setCount(count + 1); {/*Ici, je demande à setCount d'éxécuter le calcul suivant : count + 1 soit valeur + 1*/}
    }

    const [person, setPerson] = useState({
        firstName: 'John',
        lastName: 'Doe',
        age: 18,
    });

    const incrementAge = () => {
        setPerson({...person, age: person.age + 1});
        {/*
            - ...person signifie que je récupère toutes les propriétés de l'objet person
            - puis je met une virgule et je lui demande de changer la valeur de age (, age :)
            - afin de retourner la valeur age du tableau person modifiée (person.age + 1)
            
            Cela va créer un nouvel objet avec la valeur age modifiée.
        */}
    }

    return <>
        <p>Compteur : {count}</p>
        <button onClick={increment}>Incrémenter</button> {/*Puisque ma fonction increment est déclarée ici et précédée de onClick,
                                                         elle s'éxécutera à chaque fois que je cliquerai sur le bouton*/}
        <p>Âge de {person.firstName} {person.lastName} : {person.age}</p>
        <button onClick={incrementAge}>Gagner une année</button>
    </>
}

export default Count