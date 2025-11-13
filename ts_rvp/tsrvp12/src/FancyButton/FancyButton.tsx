import styles from "./FancyButtonStyles.module.css";

interface interface1{
    text: string;
} 

function FancyButton({text}: interface1){
    return <button className={styles.fancybutton}>{text}</button>;
}

export default FancyButton
