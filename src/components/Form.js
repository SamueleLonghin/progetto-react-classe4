import {useState} from 'react';
import axios from "axios";

export default function Form({action, method = 'POST'}) {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();

        const dati = {
            username: username, password: password
        };


        if (method === 'POST') {
            /**
             * POST Request
             */
                // Setting Headers
            const POST_headers = {
                    headers: {
                        //Encoding data as form-data, useful for PHP backend
                        //'Content-Type': 'multipart/form-data'  // <-- Uncommit this for PHP backend


                        // Encoding data as json, useful for Node backend
                        'Content-Type': 'application/json'      // <-- Uncommit this for NODE backend
                    },
                };
            // Make request
            axios.post(action, dati, POST_headers)
                .then(r => console.log("POST", r))
                .catch(e => console.error("POST", e))
        } else {
            /**
             * GET Request
             */
                // Setting Headers
            const GET_headers = {
                    // Serialising data in URL's params
                    params: dati
                };
            // Make request
            axios.get(action, GET_headers)
                .then(r => console.log("GET:", r))
                .catch(e => console.error("GET:", e))
        }
    }

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    return <form onSubmit={handleSubmit}>
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

}