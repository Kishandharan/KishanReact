import {useContext} from 'react';
import {Context1} from './App.tsx';
import FancyButton from "./FancyButton/FancyButton.tsx";

function Quiz(){
    let contextData = useContext(Context1);
    return <>
        <h1>{contextData.questions[contextData.counter]}</h1>
        {
            contextData.answers.map((item, index) => {<FancyButton key={index} text={item}/>})
        }
    </>;
}

export default Quiz
