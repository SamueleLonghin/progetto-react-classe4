import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
import Download from "./components/Download";
import Persona from "./components/Persona";
import Form from "./components/Form";
import Wizard from "./components/Wizard";

import {useState} from "react";
import YoutubeVideoEncoder from "./components/YoutubeVideoEncoder";
import Downloader from "./components/Downloader";
import Navigazione from "./components/Navigazione";
import Timer from "./components/Timer";

function App() {
    // const [view, setView] = useState('wizard')
    // let content;
    const states = [
        // <Timer amount={10} onFinish={() => alert("CIAO BELLOOO")}/>,
        <Counter span={3} testo={"Componente counter di 3"}/>,
        <Persona data={{firstName: "Gino"}}/>,
        <Download/>,
        <Form action={"https://echo.samuelelonghin.it?asJson=1"} method={'POST'}/>,
        <YoutubeVideoEncoder/>,
        <Downloader/>
    ]
    //
    // if (view === 'inizio')
    //     content = <>
    //         <img src={logo} className="App-logo" alt="logo"/>
    //
    //         <Counter span={1} testo={"Counter di 1"}/>
    //         <Counter span={2}/>
    //
    //         <Download/>
    //         <Persona data={""}/>
    //
    //         <Form action={"https://echo.samuelelonghin.it?asJson=1"} method={'POST'}/>
    //         {/*<Form action={"http://localhost:8008/echo"} method={'POST'}></Form>*/}
    //     </>
    // else if (view === 'wizard')
    //     content = <Wizard states={states} titolo={"TITOLONE"}/>
    // else
    //     content = <YoutubeVideoEncoder/>

    return (
        <div className="App">
            <header className="App-header">
                {/*{content}*/}
                <Wizard states={states} titolo={"TITOLONE"}/>
                {/*<Navigazione setView={setView}/>*/}
            </header>
        </div>
    );
}

export default App;
