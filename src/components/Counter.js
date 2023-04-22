import {useState} from "react";

export default function Counter({span, testo = "Counter base"}) {

    let [c, setC] = useState(0);
    let updateC = () => {
        // setC(c+1)
        let incremento = (oldC) => {
            return oldC + span
        }
        setC(incremento)
    }



    return <div>
        <button onClick={updateC}>
            {testo}: {c}
        </button>
    </div>
}