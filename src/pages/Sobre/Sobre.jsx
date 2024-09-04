import styles from "./Sobre.module.css"
import { Menu } from "../../components/Menu/Menu"

export function Sobre(){
    return (
        <div className={styles.Sobre}>
            <Menu />
            <p>Sobre</p>
        </div>
    )

}
