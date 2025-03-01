
import Footer from './components/footer'
import Navigation from './components/Header/navigation'
import HomeVideoLanding from './components/Home/BannerSection'
import OurMissionSection from './about-us/OurMissionSection'
import Recordsection from './pricing/PricingSection'
import FeatureSection from './components/Home/FeatureSection'
import OurModules from './modules/OurModules'

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HomeVideoLanding/>
        <OurMissionSection/>
        <FeatureSection />
        <OurModules />
        <Recordsection />
      </main>
      <Footer/>
    </div>
  )
}