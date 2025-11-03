import { useState } from 'react';

function App(){
    let [result, setResult] = useState(null);

    function fact(num){
        let num2 = num;
        for(let i = num2-1; i>=1; i--){
            num2 = num2 * i;
        }

        return num2;
    } 

    return (
        <>
           <input onChange={(event) => setResult(fact(event.target.value))} />
           <p>{result}</p>
        </>
    );
}

export default App
