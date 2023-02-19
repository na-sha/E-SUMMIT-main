import styles from '../styles/style'
import Navbar from '../components/Navbar/Navbar_main'
import Footer from '../components/Footer/Footer_main'
import Sponsor from '../components/Utilities/Sponsors_main'

const SponsorPage = () => {
    return (
        <div className='bg-primary w-full overflow-hidden'>
            {/* Navbar */}
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            {/* Hero Section */}
            <div className={`bg-primary ${styles.flexStart} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Sponsor />
                </div>
            </div>

            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default SponsorPage