import Header from './components/Header'
import Hero from './components/Hero'
import CountryFeature from './components/CountryFeature'
import Partners from './components/Partners'
import Workflow from './components/Workflow'
import Programs from './components/Programs'
import Testimonials from './components/Testimonials'
import Awards from './components/Awards'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'
import ScholarshipImpact from './components/ScholarshipImpact'
import Downloads from './components/Downloads'
import ScholarshipAssistance from './components/ScholarshipAssistance'
import VisaCounseling from './components/VisaCounseling'
import UniversityAdmissions from './components/UniversityAdmissions'
import Accommodation from './components/Accommodation'
import About from './components/About'
import Webinar from './components/Webinar'
import Blog from './components/Blog'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-charcoal-900 selection:bg-primary-100 selection:text-primary-900">
      <Header />
      <Hero />
      <Partners />
      <About />
      <CountryFeature />
      <Awards />
      <ScholarshipAssistance />
      <VisaCounseling />
      <UniversityAdmissions />
      <Accommodation />
      <Workflow />
      <ScholarshipImpact />
      <Downloads />
      <Programs />
      <Tests />
      <Webinar />
      <Blog />
      <FAQ />
      <Footer />
      <FloatingContact />
    </div>
  )
}

function Tests() { return <Testimonials /> }

export default App
