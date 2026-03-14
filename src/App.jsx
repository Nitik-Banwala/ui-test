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

function App() {

  return (
    <>
      <div >
        <div className=' p-4 bg-[linear-gradient(180deg,#4CAF501A_0%,#4CAF5000_100%)]'>
          <Navbar />
          <Hero />
        </div>
        <div className='mt-18.5' >
          <BetterSection />
        </div>
        <Behind />
        <div className='mt-42.5'>
          <Results/>
        </div>
        <div className='mt-42.5'>
          <WorkedWithRabbit/>
        </div>
        <div className='mt-42.5'>
          <Funding/>
        </div>
        <div className='mt-42.5 mb-25'>
          <Discover/>
        </div>
      </div>
    </>
  )
}

export default App
