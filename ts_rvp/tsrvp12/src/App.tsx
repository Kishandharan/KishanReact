import {useEffect} from 'react';

export default function App(){
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1",{ headers: {"Content-Type": "application/json"}})
            .then(response => response.json())
            .then(response => console.log(response));
    }, []);        
}


