import styles from '../styles/style'
import Navbar from '../components/Navbar/Navbar_main'
import TeamEDC from '../components/Main/Team_main'
import Footer from '../components/Footer/Footer_main'

const Team = () => {
    return (
        <div className='bg-black w-full overflow-hidden'>
            <div className={`z-10 ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth} z-50`}>
                    <Navbar />
                </div>
            </div>
            <div className={`bg-black z-0 ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth} z-0`}>
                    <TeamEDC />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Team