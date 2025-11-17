import {Link, useParams} from 'react-router-dom';

function Contact(){
    let {name} = useParams();

    return <>
        <p>This is the Contact Page</p>
        <p>Your name is: {name}</p>
        <Link to="/">Go back to Home Page</Link>
    </>;
}

export default Contact
