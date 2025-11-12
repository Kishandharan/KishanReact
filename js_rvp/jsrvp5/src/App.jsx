import { useState } from 'react';

function App(){
    let [result, setResult] = useState(0);

    function add(){
        return result+1;
    }

    function sub(){
        return result-1;    
    }

    function fac(){
        let num = result;
        for(let i = num-1; i>0; i--){
            num = num * i;
        }
        return num;
    }

    return <>
        <p>{result}</p>
        <button onClick={() => {setResult(add())}}>Add</button>
        <button onClick={() => {setResult(sub())}}>Sub</button>
        <button onClick={() => {setResult(fac())}}>Fac</button>
    </>;
}

export default App
