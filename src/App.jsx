import { useState } from 'react'
import './index.css'
import Navbar from './components/common/Navbar'
import Hero from './components/Hero'
import BetterSection from './components/Lending'
import Behind from './components/Behind'
import Results from './components/Results'
import WorkedWithRabbit from './components/Rabbit'
import Funding from './components/Funding'
import Discover from './components/Discover'
import Footer from './components/common/Footer'

function App() {

  return (
    <>
      <div >
        <div className=' p-4 bg-[linear-gradient(180deg,#4CAF501A_0%,#4CAF5000_100%)]'>
          <Navbar />
          <Hero />
        </div>
        <BetterSection />
        <Behind />
        <Results />
        <WorkedWithRabbit />
        <Funding />
        <Discover />
        <Footer/>
      </div>
    </>
  )
}

export default App
