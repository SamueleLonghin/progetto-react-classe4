import {useState} from 'react';

export default function Wizard({states}) {
    const [iterator, setIterator] = useState(0)

    const handleIndietro = () => {
        setIterator(i => i - 1);
    }
    const handleAvanti = () => {

        setIterator(i => i + 1);
    }
    return <>
        <h1>Wizard</h1>
        {states[iterator % states.length]}
        <br/>
        <div>
            <button onClick={handleIndietro}>Indietro</button>
            <> pagina {iterator % states.length} </>
            <button onClick={handleAvanti}>Avanti</button>
        </div>
    </>
}