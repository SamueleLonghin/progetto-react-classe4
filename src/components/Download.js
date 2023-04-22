import {useEffect, useState} from "react";
import Persona from "./Persona";

export default function Download() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    let scarica = () => {



        fetch("/users.json")
            .then(res => res.json())
            .then(
                (result) => {

                    // vostro codice

                    setIsLoaded(true);
                    console.log(result)
                    setItems(result.users);
                },
                // Nota: è importante gestire gli errori qui
                // invece di un blocco catch() in modo da non fare passare
                // eccezioni da bug reali nei componenti.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )



    }

    let button = <button onClick={scarica}>Scarica</button>

    // useEffect(scarica,[]) // viene eseguito all'inizio del programma
    if (error)
        return <div>Error</div>
    if (!isLoaded)
        return <div>{button}</div>;
    return <div>
        {button}
        <div>
            <ul>
                {items.map(item => (
                    <Persona data={item}/>
                ))}
            </ul>
        </div>
    </div>
}