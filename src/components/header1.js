import { hauser_italic } from "../fonts";
import styles from './header1.module.css'

export default function Header1({title}) {
    <div className={hauser_italic.className}>
        <h1 className={styles.header1}>{title}</h1>
    </div>
}