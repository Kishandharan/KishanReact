import { useState, useContext, createContext } from "react";

const context1 = createContext();

function App(){
    let [statefulValue1, setStVal1] = useState("I am hungry!");

    return ( <>
        <context1.Provider value={statefulValue1}>
            <ExampleComponent1 />
        </context1.Provider>                
        <button onClick = {() => setStVal1("I am full! Thanks!")}>Click me!</button>
    </> );
}

function ExampleComponent1(){
    let context_data = useContext(context1);
    return ( <>
        <h1>Hello world</h1>
        <h1>{context_data}</h1>
    </> );
}

export default App
