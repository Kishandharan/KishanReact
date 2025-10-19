import { useReducer } from 'react';

function App() {

    const reducer = (state, action) => {
       if(action.action == "+"){
           return state+1;
       }else if(action.action == "-"){
           return state-1;
       }else if(action.action == "*"){
           return 0;
       }else{
           return state;
       }
    }
    let [count, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <p>{count}</p>
            <button onClick = { () => { dispatch( {action: "+"} ) } } >Increase</button>
            <button onClick = { () => { dispatch( {action: "-"} ) } } >Decrease</button>
            <button onClick = { () => { dispatch( {action: "*"} ) } } >Reset</button>
        </>
    );
}

export default App
