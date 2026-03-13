import { useState } from 'react'
import './index.css'
import Navbar from './components/common/Navbar'
import Hero from './components/Hero'
import BetterSection from './components/Footer'

function App() {

  return (
    <>
      <div >
        <div className=' p-4 bg-[linear-gradient(180deg,#4CAF501A_0%,#4CAF5000_100%)]'>
          <Navbar />
          <Hero />
        </div>
        {/* <div className='p-4 bg-gray h-96 '>
          <BetterSection/>
        </div> */}
      </div>
    </>
  )
}

export default App
