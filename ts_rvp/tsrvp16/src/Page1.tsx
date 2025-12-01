import {Link} from "react-router-dom";
import {useRef} from "react";

function Page1(){
    let ref1 = useRef();
    let handle1 = async () => {
        await fetch(`http://127.0.0.1:5000/createdb/${ref1.current.value}`);
    };

    return <>
        <h1>Create MySQL Databases</h1>
        <input ref={ref1}/>
        <button onClick={()=>{handle1()}}>Create Database</button>
        <br/>
        <br/>
        <Link to="/">Go Back to Home page</Link>
    </>
}

export default Page1
