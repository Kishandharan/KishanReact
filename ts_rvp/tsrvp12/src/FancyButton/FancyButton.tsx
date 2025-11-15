import styles from "./FancyButtonStyles.module.css";

interface interface1{
    text: string;
    onClick: ()? => void; 
} 

function FancyButton({text, handler}: interface1){
    return <button className={styles.fancybutton} onClick = {()=>{handler()}}>{text}</button>;
}

export default FancyButton
