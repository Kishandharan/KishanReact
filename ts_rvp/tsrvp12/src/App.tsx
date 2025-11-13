import {createContext, useState} from 'react';
import Quiz from './QuizComponent.tsx'

export let Context1 = createContext();

function App(){
    let [counter, setCounter] = useState(0);
    let questions = ["1+1?", "3+2?", "6+6?"];
    let answers = ["2", "5", "12"];


    return <>
        <Context1.Provider value={{counter, setCounter, questions, answers}}>      
            <Quiz  />
        </Context1.Provider>
    </>;
}

export default App
