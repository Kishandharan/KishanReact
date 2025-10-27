import {useRef} from "react";

interface props1{
    title: String;
    body: String;
}

function Accordion(props: props1){
    let ref1 = useRef();
    let ref2 = useRef(1);

    let handle1 = () => {
        if(ref2.current == 0){
            ref1.current.style.display = "";
            ref2.current = 1;
        }else{
            ref1.current.style.display = "none";
            ref2.current = 0;
        } 
    };

    return (
        <>
            <h3 onClick={handle1}>{props.title}</h3>
            <pre ref={ref1}>{props.body}</pre>
        </>
    )
}

export default Accordion
