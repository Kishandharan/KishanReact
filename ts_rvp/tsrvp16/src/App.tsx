import {Link} from "react-router-dom";

function App() {
    return <>
        <h1>Welcome to MySQL database manager!</h1>                
        <ul>
            <li><Link to="/page1">Create MySQL databases</Link></li>
            <li><Link to="/page2">Delete MySQL databases</Link></li>
            <li><Link to="/page3">See all MySQL databases available</Link></li>
        </ul>
    </>;
}

export default App
