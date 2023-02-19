import styles from '../styles/style'
import Navbar from '../components/Navbar/Navbar_main'
import Footer from '../components/Footer/Footer_main'
import HeroEvent from '../components/Events/Hero_event_main'
import Timeline from '../components/Events/Timeline_main'

const Events = () => {
    return (
        <div className='bg-primary w-full overflow-hidden'>
            {/* Navbar */}
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            {/* Hero Section */}
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <HeroEvent />
                    <Timeline />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Events