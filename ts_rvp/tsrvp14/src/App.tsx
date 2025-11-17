import {Link} from "react-router-dom";

function App(){
    return <>
        <p>This is the home page...</p>
        <ol>
            <li><Link to="/about">About page</Link></li>
            <li><Link to="/contact">Contact page</Link></li>
        </ol>
    </>;
}

export default App
