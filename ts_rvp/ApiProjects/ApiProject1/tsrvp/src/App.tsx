import axios from 'axios';
import { useEffect } from 'react';

function App(){
    useEffect(() => {
        axios.post("http://127.0.0.1:8000/route1", {"message":"hello"})
            .then((response) => {
                console.log(response.data);
            }).catch((err) => {
                console.log(err); 
                return <p>Oh no! Something went wrong while fetching the data!</p>;
            });
    },[]);    
}

export default App
