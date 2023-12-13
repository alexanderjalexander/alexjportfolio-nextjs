import styles from './intro.module.css';
import { hauser } from '../../fonts';

export default function Intro({title, desc}) {
    return (
        <div className={styles.intro_section}>
            <div className={styles.intro_container}>
                <div className={styles.intro_header + ' ' + hauser.className} >
                    {title}
                </div>
                <div className={styles.intro_desc}>
                    {desc}
                </div>
            </div>
        </div>
    )
}
