function Count() {

    let count = 0;

    const increment = () => {

    }

    return <>
        <p>Compteur : {count}</p>
        <button onClick={increment}>Incrémenter</button>
    </>
}

export default Count