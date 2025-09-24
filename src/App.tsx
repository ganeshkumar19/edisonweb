import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { WhyEdisonOS } from './components/WhyEdisonOS'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { FAQ } from './components/FAQ'

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <WhyEdisonOS />
      <Testimonials />
      <Contact />
      <FAQ />
    </>
  )
}

export default App
