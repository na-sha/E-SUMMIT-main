import styles from '../../styles/Header.module.css'
import Button from '../Reusables/Button_esummit23_main'

const Header = () => {
    return (
        <main className={`${styles.container}`}>
            <div>
                <h1 className={`${styles.main}`}>E-SUMMIT &apos;23</h1>
                <p className={styles.content}>
                    E-Summit &apos;23 aims to provide a platform for discussion on innovative ideas that have the potential to transform current challenges into opportunities for positive change. The goal of the event is to inspire and offer rays of hope to attendees.
                </p>
                <a href="#Register">
                    <Button cta="Register" />
                </a>
                <p><span className='label'>Biz Conclave &emsp;· &emsp;Unwind&emsp; ·&emsp;Internship Fair</span></p>
            </div>
        </main>
    )
}

export default Header