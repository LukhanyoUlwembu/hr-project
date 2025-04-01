import FeatureSection from './components/FeatureSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import React from 'react'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Workflow from './components/Workflow'

const App = () => {
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <FeatureSection/>
     <Workflow/>
     <Pricing/>
     <Testimonials/>
     <Footer/>
    </div>
  )
}

export default App
