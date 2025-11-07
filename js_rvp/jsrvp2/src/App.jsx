import { useState, useRef } from "react";

function App(){
    let [result, setResult] = useState(null);
    let ref1 = useRef();

    function fact(num1){
        let num2 = num1;
        for(let i = num1-1; i>0; i--){
            num2 = num2 * i;
        }
        return num2;
    }



    return (
        <>
            <input ref={ref1} />
            <button onClick={ () => setResult(fact(ref1.current.value))}>Submit</button>
            <p>{result}</p>
        </>
    );
}

export default App
