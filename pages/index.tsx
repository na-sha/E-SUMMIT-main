import styles from '../styles/style'

import Navbar from '../components/Navbar/Navbar_main'
import Header from '../components/Hero/Hero_main'
import Stats from '../components/Reusables/Stats'
import Footer from '../components/Footer/Footer_main'
import About from '../components/Main/AboutEDC'
import Values from '../components/Main/ValuesEDC'
// import About from '../components/About'
// import Values from '../components/Values'
// import Footer from '../components/Footer'

const HomeEDC = () => {
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
          <Header />
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <About />
          <Values />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default HomeEDC