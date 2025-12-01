import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

function Page2(){
    let [state1, setState1] = useState(<></>);
    useEffect(()=>{
        async function listData(){
            let data1 = await fetch("http://127.0.0.1:5000/showdbs");
            let data2 = await data1.json();
            let data3 = data2["response"];
            setState1(data3.map((data, key) => (
                <li key={key}>{data}</li>                
            )));
        }
        listData();
    },[]);

    return <>
        <h1>See Available MySQL Databases</h1>
        <ol>
        {state1}
        </ol>
        <br/>
        <br/>
        <Link to="/">Go Back to Home page</Link>
    </>
}

export default Page2
