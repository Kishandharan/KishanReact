import {Link} from "react-router-dom"
import {useRef} from "react"

function Page1(){
    let ref1 = useRef();
    let handle1 = ()=>{
        fetch(`http://127.0.0.1:5000/createdb/${ref1.current.value}`).
            then((response) => {console.log(response)});
    };

    return <>
        <h1>Create Databases here!</h1>
        <input ref={ref1} placeholder="Enter DB name"/>
        <button onClick={ ()=>{handle1()} }>Create DB</button>
        <br />
        <br />
        <Link to="/">Go Back To Home</Link>
    </>;
}

export default Page1
