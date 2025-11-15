import {useState} from 'react';

interface props1{
    lsKey: string;
    lsValue: string;
}

function KeyValuePair({lsKey, lsValue}: props1){
    localStorage.setItem(lsKey, lsValue);
    let [deleted, setDeleted] = useState(false);

    if(deleted == true){
        localStorage.removeItem(lsKey);
        return null;
    }

    return <>
        <span>{lsKey}</span>      
        <span>{lsValue}</span>
        <button onClick={() => {setDeleted(true)}}>Delete Pair</button>
    </>;
}

export default KeyValuePair;
