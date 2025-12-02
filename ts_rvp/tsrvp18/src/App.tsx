import {useState, useEffect} from "react";

function App() {
    let [state1, setState1] = useState();
    let url1 = "https://v2.jokeapi.dev/joke/Programming?type=single&amount=1";

    async function fetchData(){
        let dat1 = await fetch(url1);
        let dat2 = await dat1.json();
        setState1(dat2["joke"]);
    }
    
    useEffect(()=>{
        fetchData();
    },[]);

    return <>
        <p>{state1}</p>
        <button onClick={() => {fetchData()}}>Get Joke</button>
    </>;
}

export default App
