import { useState } from "react";

function Form() {

    const [value, setValue] = useState(''); {/*Je met une string vide pour ne pas avoir de problème*/}
    
    const handleChange = (e) => {
        setValue(e.target.value)
    }


    const [checked, setChecked] = useState(true)

    const toggleCheck = () => {
        setChecked(!checked)
    }

    return <form>
        <textarea value={value} onChange={handleChange}/>
        <input type="checkbox" checked={checked} onChange={toggleCheck}/>
        <button disabled={!checked}>Envoyer</button>
    </form>
}

export default Form