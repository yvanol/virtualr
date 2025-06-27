import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testiomonials from './components/Testiomonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
    </div>
    <FeatureSection />
    <Workflow />
    <Pricing />
    <Testiomonials />
    <Footer />
    </>
  )
}

export default App
