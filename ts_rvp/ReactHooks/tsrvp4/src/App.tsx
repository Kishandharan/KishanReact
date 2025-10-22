import { useId } from "react";

function App(){
    let id1 = useId();
    let id2 = useId();

    return (
        <>
            <p>{id1}</p>            
            <p>{id2}</p>            
        </>
    )
}

export default App
