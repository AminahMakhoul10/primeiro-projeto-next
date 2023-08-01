import styles from "./style.module.css";
export default function Button({cor,children}) {
    return (
        <button className={styles.button} style={{backgroundColor:cor}}>{children}</button>
    )
    }