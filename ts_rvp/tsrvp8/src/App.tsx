import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
    let [joke, setJoke] = useState("");

    useEffect(() => {
        axios.get("https://icanhazdadjoke.com", { headers : { "Content-Type":"application/json" } })
            .then(response => setJoke(response.data))
            .catch(error => console.log("What the heck! We got an error", error));
    },[]);

    return (
        <>
            <input readOnly={true} value={joke}/>
        </>
    )
}

export default App
