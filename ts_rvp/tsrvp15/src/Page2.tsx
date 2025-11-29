import {Link} from 'react-router-dom'
import {useRef} from 'react'

function Page2(){
    let ref1 = useRef();
    let handle1 = ()=>{
        fetch(`http://127.0.0.1:5000/deletedb/${ref1.current.value}`)
            .then((response)=>{console.log(response)}, (response)=>{console.log(response)});

    };

    return <>
        <h1>Delete MySql Databases</h1>
        <input ref={ref1} placeholder="Enter Database Name"/>
        <button onClick={()=>{handle1()}}>Delete Database</button>
        <br/>
        <br />
        <Link to="/">Go back to home</Link>
    </>;
}

export default Page2
