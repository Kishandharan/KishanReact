import { useState } from 'react'

function App() {
    let [var1, setVar1] = useState("Gary");
    
    
    return (
        <>
            <p>{var1}</p>
            <button onClick={() => {setVar1("Gary Kasperov")}}>Click me</button>
        </>
    );
}

export default App
