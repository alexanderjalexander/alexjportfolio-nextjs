import styles from './footer.module.css'
import { hauser } from '../../fonts'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileText } from '@fortawesome/free-regular-svg-icons'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_info_container}>
                    <h1 className={hauser.className}>CONTACT ME</h1>
                    <p>Phone Number: (908)-367-0582</p>
                    <p>Email Address: ajansiew@stevens.edu</p>
                </div>
                <div className={styles.footer_info_container}>
                    <h1 className={hauser.className}>SOCIALS</h1>
                    <a href="https://github.com/alexanderjalexander" target="_blank" className={styles.footer_link}> 
                        <FontAwesomeIcon icon={faGithub} /> 
                        GITHUB
                    </a>
                    <a href="https://www.linkedin.com/in/alexander-j-27144720b" target="_blank" className={styles.footer_link}> 
                        <FontAwesomeIcon icon={faLinkedin} /> 
                        LINKEDIN
                    </a>
                    <a href="https://docs.google.com/document/d/1Z66s8AbmAiz9gnnqzXZMZKyq_UVTiRQaaXdzgOoPDIE/edit?usp=sharing" target="_blank" className={styles.footer_link}> 
                        <FontAwesomeIcon icon={faFileText} /> 
                        RESUME
                    </a>
                </div>
            </div>
        </div>
    )
}