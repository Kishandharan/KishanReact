import {useContext} from 'react';
import {Context1} from './App.tsx';
import FancyButton from "./FancyButton/FancyButton.tsx";

function Quiz(){
    let contextData = useContext(Context1);
    console.log(contextData);
    let handler = (item) => {
        if(item == contextData.answers[contextData.counter]){
           contextData.setCounter(prev => prev+1);
           console.log("Rerendered");
        } 
    }

    return <>
        <h1>{contextData.questions[contextData.counter]}</h1>
        {contextData.answers.map((item, index) => <FancyButton key={index} text={item} onClick={()=>{handler(item)}}/>)}
    </>;
}

export default Quiz
