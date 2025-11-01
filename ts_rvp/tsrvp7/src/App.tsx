import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
    let [apiResponse, setApiResponse] = useState(null);

    useEffect(
        () => {
            axios.get('http://localhost:3000/route1', { headers: { "Content-Type":"application/json" } })
                .then(response => setApiResponse(response.data.info))
                .catch(error => console.log("Got an error instead of the data! Lol", error));
        },
    []);

    return (
        <>
            <p>{apiResponse}</p>            
        </>
    );
}

export default App
