import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
import Download from "./components/Download";
import Persona from "./components/Persona";
import Form from "./components/Form";
import Wizard from "./components/Wizard";

import {useState} from "react";

function App() {
    const [view, setView] = useState('inizio')
    let content;


    if (view === 'inizio')
        content = <>
            <img src={logo} className="App-logo" alt="logo"/>

            <Counter span={1} testo={"Counter di 1"}/>
            <Counter span={2}/>

            <Download/>
            <Persona data={""}/>

            <Form action={"https://echo.samuelelonghin.it?asJson=1"} method={'POST'}></Form>
            <Form action={"http://localhost:8008/echo"} method={'POST'}></Form>
        </>
    else
        content = <Wizard states={[
            <Counter span={3} testo={"Componente counter di 3"}/>,
            <Persona data={{firstName: "Gino"}}/>,
            <Download/>
        ]}/>

    return (
        <div className="App">
            <header className="App-header">
                {content}

                <div>
                    <button onClick={() => setView('wizard')}>Classico</button>
                    <button onClick={() => setView('wizard')}>Wizard</button>
                </div>
            </header>
        </div>
    );
}

export default App;
