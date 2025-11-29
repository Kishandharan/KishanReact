import {Link} from 'react-router-dom'
import {useState} from 'react'

function Page3(){
    let [state1, setState] = useState();
    let handle1 = ()=>{
        fetch(`http://127.0.0.1:5000/showdbs`)
            .then((response)=>{setState(response)}, (response)=>{console.log(response)});
    };

    return <>
        <h1>See MySql Databases</h1>
        <p>{state1[0][0]}</p>
        <br/>
        <br />
        <Link to="/">Go back to home</Link>
    </>;
}

export default Page3
