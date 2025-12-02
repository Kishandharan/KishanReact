import {useState, useEffect} from "react";

function App(){
    let [state1, setState1] = useState();

    async function handle1(){
        let url1 = "https://v2.jokeapi.dev/joke/Programming?type=single&amount=1";
        let dat1 = await fetch(url1);
        let dat2 = await dat1.json();
        setState1(dat2["joke"]);
    }
    
    return (
      <>
          <p>{state1}</p>
          <button onClick={()=>{handle1()}}>Get Joke</button>          
      </>
    )
}

export default App
