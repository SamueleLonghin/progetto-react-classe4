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
        {states[iterator % states.length]}
        <br/>
        <div>
            <button onClick={handleIndietro}>Indietro</button>
            <button onClick={handleAvanti}>Avanti</button>
        </div>
    </>
}