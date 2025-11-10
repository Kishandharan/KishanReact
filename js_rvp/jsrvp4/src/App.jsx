import {useReducer} from 'react';

function App() {
    function reducer1(state, action){
        if(action.action == "fact"){
            let num2 = state;
            for(let i = num2-1; i>0; i--){
                num2 = num2 * i;
            }
            return num2;
        }else if(action.action == "add1"){
            return state+1;
        }else if(action.action == "sub1"){
            return state-1;
        }
    }

    let [x, dispatchX] = useReducer(reducer1, 1);

    return <>
        <p>{x}</p>
        <button onClick = { () => { dispatchX({ action: "add1" }) } }>Add1</button>
        <button onClick = { () => { dispatchX({ action: "sub1" }) } }>Sub1</button>
        <button onClick = { () => { dispatchX({ action: "fact" }) } }>Fact</button>
    </>;
}

export default App
