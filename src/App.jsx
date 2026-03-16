import { useState } from 'react'
import Navbar from './component/Navbar'
import Hero from './pages/Hero'
import BetterTech from './pages/BetterTech'
import WhoBehind from './pages/WhoBehind'
import Testimonials from './pages/Testimonials'
import WorkedRabbit from './pages/WorkedRabbit'
import Footer from './component/Footer'





function App() {


  return (
    <>
      <div className="w-full bg-gradient-to-b from-[rgba(76,175,80,0.1)] to-[rgba(76,175,80,0)]">
        <Navbar />
        <Hero />
        <BetterTech />
        <WhoBehind />
        <Testimonials />
        <WorkedRabbit />
        <Footer />
      </div>
      
   
    </>
  )
}

export default App
