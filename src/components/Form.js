import {useState} from 'react';
import axios from "axios";

export default function Form({action, method = 'POST'}) {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [response, setResponse] = useState(null);
    const handleSubmit = (event) => {
        event.preventDefault();

        const dati = {
            username: username,
            password: password,
            p1: "CIAO MONDO"
        };

        /**
         * POST Request
         */
            // Setting Headers
        const POST_headers = {
                headers: {
                    //Encoding data as form-data, useful for PHP backend
                    'Content-Type': 'multipart/form-data'  // <-- Uncommit this for PHP backend


                    // Encoding data as json, useful for Node backend
                    // 'Content-Type': 'application/json'      // <-- Uncommit this for NODE backend
                },
            };
        // Make request
        axios.post("https://echo.samuelelonghin.it?asJson=1", dati, POST_headers)
            .then(r => {
                setResponse(r.data)
                console.log("POST", r)
            })
            .catch(e => console.error("POST", e))
    }

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    return <>
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChangeUsername}
                />
            </label>
            <label>Enter your age:
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </label>
            <input type="submit"/>
        </form>
        {response ? JSON.stringify(response) : ''}
    </>

}