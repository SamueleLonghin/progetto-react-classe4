import {useState} from 'react';







export default function Wizard({states,titolo}) {
    const [iterator, setIterator] = useState(0)

    const handleIndietro = () => {
        setIterator(iterator -1);
    }
    const handleAvanti = () => {

        setIterator(i => i + 1);
    }
    return <>
        <h1>{titolo}</h1>
        {states[iterator % states.length]}
        <br/>
        <div>
            <button onClick={handleIndietro}>Indietro</button>
            <> pagina {iterator % states.length} </>
            <button onClick={handleAvanti}>Avanti</button>
        </div>
    </>
}