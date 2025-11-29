import {Link} from "react-router-dom";

function NotFoundPage(){
    return <>
        <h1>We are sorry but the page you are looking for does not exist yet...</h1>
        <Link to="/">Go back to home</Link>
    </>;
}

export default NotFoundPage
