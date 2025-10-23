import { useEffect, useState } from "react";

function App(){
    let [state1, setState1] = useState(0);
     
    useEffect(
        () => {
            console.log("The state variable has changed!");
        },
        [state1]
    );

    return (
        <>
            <button onClick={() => { setState1((prev) => prev+1) }}>Increment</button>
        </>
    );    
}

export default App
