import { useState } from 'react';

function App(){
    let [daysSinceBirth, setDaysSinceBirth] = useState(0);

    function cdsb(date){
        console.log(date);
        let birthDate = new Date(date);
        let currentDate = new Date();
        let daysSinceBirth = currentDate-birthDate;
        return daysSinceBirth;
    }

    return <>
        <input onChange={(e) => {setDaysSinceBirth(cdsb(e.target.value))}}/>
        <p>{daysSinceBirth}</p>
    </>
}

export default App
