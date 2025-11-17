import {Link} from "react-router-dom";

function PageNotFound(){
    return <>
        <p>Sorry but this is not the page you are looking for..</p>
        <Link to="/">Go back to home page</Link>
    </>;
}

export default PageNotFound
