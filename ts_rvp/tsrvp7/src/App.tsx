import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
    let [apiResponse, setApiResponse] = useState(null);

    useEffect(
        () => {
            axios.get('192.168.70.104:6888/route1')
                .then(response => setApiResponse(response.data))
                .catch(error => console.log("Got an error instead of the data! Lol", error));
        },
    []);

    return (
        <>
            <p>{JSON.stringify(apiResponse)}</p>            
        </>
    );
}

export default App
