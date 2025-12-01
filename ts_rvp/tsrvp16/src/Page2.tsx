import {Link} from "react-router-dom";
import {useRef} from "react";

function Page2(){
    let ref1 = useRef();
    let handle1 = async () => {
        await fetch(`http://127.0.0.1:5000/deletedb/${ref1.current.value}`);
    };

    return <>
        <h1>Delete MySQL Databases</h1>
        <input ref={ref1}/>
        <button onClick={()=>{handle1()}}>Delete Database</button>
        <br/>
        <br/>
        <Link to="/">Go Back to Home page</Link>
    </>
}

export default Page2
