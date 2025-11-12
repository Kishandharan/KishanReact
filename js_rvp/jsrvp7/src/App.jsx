import { useState } from 'react';

function App(){
    let [dt1, setDt1] = useState(0);
    let [dt2, setDt2] = useState(0);
    let [dt3, setDt3] = useState(0);
    let [dt4, setDt4] = useState(0);

    function calc1(){
        let dt1 = new Date("1970-01-01");
        setDt1(dt1.getTime());
    }
    function calc2(){
        let dt2 = new Date("1970-01-02");
        setDt2(dt2.getTime());
    }
    function calc3(){
        let dt3 = new Date("2025-01-01");
        setDt3(dt3.getTime());
    }
    function calc4(){
        let dt4 = new Date("2025-11-12");
        setDt4(dt4.getTime());
    }

    return <>
        <h1>Epoch Time Illustration</h1>
        <p>1970-01-01 - {dt1} ms</p>
        <p>1970-01-02 - {dt2} ms</p>
        <p>2025-01-01 - {dt3} ms</p>
        <p>2025-11-12 - {dt4} ms</p>
        <button onClick={() => { calc1(); calc2(); calc3(); calc4(); }}>Calculate Elapsed Time</button>
    </>;
}

export default App
