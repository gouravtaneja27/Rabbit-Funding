import { useState } from 'react'
import Hero from './sections/Hero'
import BetterTech from './sections/BetterTech'
import WhoBehind from './sections/WhoBehind'
import Testimonials from './sections/Testimonials'
import WorkedRabbit from './sections/WorkedRabbit'
import Footer from './component/common/Footer'
import RealFunding from './sections/RealFunding'
function App() {
  return (
    <div className="w-full ">
      <Hero />
      <BetterTech />
      <WhoBehind />
      <Testimonials />
      <WorkedRabbit />
      <RealFunding />
      <Footer />

    </div>
  )
}

export default App
