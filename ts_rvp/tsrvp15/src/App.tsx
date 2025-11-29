import { Link } from "react-router-dom";

function App(){
    return <>
        <h1>Welcome to MySql Manager!</h1>
        <ul>
            <li><Link to="/page1">Create Databases</Link></li>
            <li><Link to="/page2">Delete Databases</Link></li>
            <li><Link to="/page3">See available databases</Link></li>
        </ul>
    </>;
}

export default App
