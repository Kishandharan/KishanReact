import { useState } from 'react';
import styles from "./TodoTaskStyles.module.css";

interface todoTaskProps{
    taskDesc: string;
}

export default function TodoTask(props: todoTaskProps){
    let [done, setDone] = useState(false);

    if(done === true){
        return null;
    }

    return (
        <div className={styles.wrapperDiv}>
            <p>{props.taskDesc}</p>
            <button onClick={() => { setDone(true) }}>Delete as completed task</button>
        </div>
    );    
}
