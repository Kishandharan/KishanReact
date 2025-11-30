import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Page3(){
    let [state1, setState] = useState();
    useEffect(function(){

        async function fetchData() {
            let data1 = await fetch("http://localhost:5000/showdbs");
            let data2 = await data1.json();
            let data3 = [];
            for(let i of data2["data"]){
                data3.push(i[0]);
            }
            setState(<>
                <ul>
                    {data3.map((data, index) => <li key={index}>{data}</li> )}
                </ul>
            </>);
            console.log(data3);
        };
        fetchData();

    },[])

    return <>
        <h1>See MySql Databases</h1>
        {state1}
        <br/>
        <br />
        <Link to="/">Go back to home</Link>
    </>;
}

export default Page3
