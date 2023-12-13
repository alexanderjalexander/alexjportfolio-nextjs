import { hauser_italic } from "../fonts";
import styles from './header2.module.css'

export default function Header2({title}) {
    <div className={hauser_italic.className}>
        <h1 className={styles.header2}>{title}</h1>
    </div>
}