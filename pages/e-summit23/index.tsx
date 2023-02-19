import Events from '../../components/Events/Events'
import Footer from '../../components/Footer/Footer_main'
import Hero from '../../components/Hero/Hero_esummit23'
import Navbar from '../../components/Navbar/Navbar_esummit23'
import Register from '../../components/Main/Registration_esummit23'
import Sponsors from '../../components/Sponsors/Sponsors'

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Events />
        <Sponsors />
      </div>

      <div className={`w-full sm:px-16 px-6 flex justify-center items-center relative`}>
        <div className={`xl:max-w-[1280px] w-full flex justify-center items-center`}>
          <Register />
        </div>
      </div>

      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Footer />
        </div>
      </div>
    </>
  )
}
