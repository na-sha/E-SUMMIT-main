import Events from '../components/Events/Events'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Sponsors from '../components/Sponsors/Sponsors'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Events />
      <Sponsors />
    </div>
  )
}
