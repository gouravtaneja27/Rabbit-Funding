import { useState } from 'react'
import Navbar from './component/Navbar'
import Hero from './pages/Hero'
import BetterTech from './pages/BetterTech'
import WhoBehind from './pages/WhoBehind'
import Testimonials from './pages/Testimonials'





function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <BetterTech />
      <WhoBehind />
      <Testimonials />
   
    </>
  )
}

export default App
