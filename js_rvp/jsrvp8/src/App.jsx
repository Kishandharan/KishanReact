import {useState} from 'react';

function App(){
    let [currentPage, setCurrentPage] = useState(<><p>This is the home page</p></>);
    return <>
        {currentPage}
        <button onClick={() => {setCurrentPage(<AboutPage />)}}>Go to about page</button>
        <button onClick={() => {setCurrentPage(<ContactPage />)}}>Go to Contact page</button>
    </>;
}

function AboutPage(){
    return <>
        <p>This is the about page</p>
    </>;
}

function ContactPage(){
    return <>
        <p>This is the contact page</p>
    </>;
}

export default App
