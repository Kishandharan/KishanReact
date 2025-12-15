import {useEffect, useState} from "react";

function App() {
    let [joke, setJoke] = useState("");

    async function fetchData(){
        let url1 = "http://127.0.0.1:5000/joke";
        let dat1 = await fetch(url1);
        let dat2 = await dat1.json();
        let jok1 = dat2.joke;
        setJoke(jok1);
    }
    
    useEffect( () => {
        fetchData();
    }, [] );

    return <>
        <p>{joke}</p>
        <button onClick={ () => {fetchData()} }>Get Joke</button>
    </>;
}

export default App
