import { useState } from 'react';

function App(){
    let [x, setX] = useState(1);

    function factorial(){
        let num2 = x;
        for(let i = num2-1; i>0; i--){
            num2 = num2 * i;
        }
        return num2;
    }

    function add1(){
        return x+1;
    }

    function sub1(){
        return x-1;
    }

    return <>
        <p>{x}</p>
        <button onClick={ () => {setX(add1())} }>Add1</button>
        <button onClick={ () => {setX(sub1())} }>Sub</button>
        <button onClick={ () => {setX(factorial())} }>Fact</button>
    </>;
}

export default App
