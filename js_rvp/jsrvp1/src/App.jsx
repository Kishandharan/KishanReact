import { useState } from 'react';
 
function App(){
    let [square, setSquare] = useState(null);

    function sqr(num){
        return num*num;
    }

    return (
        <>
            <input onChange={ (e) => setSquare(sqr(e.target.value)) } />
            <p>{square} </p>
        </>
    );
}

export default App
