import { useState, useRef } from 'react';

function App() {
    let [statevar1, setStatevar1] = useState("I am sad, please click that button to make me happy");
    let ref1 = useRef();

    return (
        <>
            <button onClick={ () => {setStatevar1("I am happy! Thanks!"); ref1.current.style.color="red";} }>Click me!</button>
            <p ref={ref1}>{statevar1}</p>
        </>
    );
}

export default App
