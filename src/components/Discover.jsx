import React from 'react'
import Icons from './common/Icons'

const Discover = () => {
  return (
    <div className=' px-4 mt-32.5 md:mt-42.5 mb-25 '>
      <div className="sm:h-[328.1px] h-auto flex flex-col  items-center max-w-285 mx-auto rounded-3xl pt-15 pb-15.5 bg-[url('/assets/images/Bg-img2.webp')] bg-cover bg-center ">
        <h1 className='text-white font-bold text-[32px] flex-col leading-[120%] max-w-[766.1px] px-2 flex text-center'><span>Love what Rabbit Did for You! </span>
          Share your story and help others discover human-first funding.</h1>
        <button className='text-white group w-full max-w-[240.1px] sm:max-w-[296.1px] h-[60.1px] text-sm font-semibold leading-[100%] rounded-[200px] flex flex-row sm:text-base hover:text-ternary bg-dark justify-center items-center mt-8 hover:bg-white ' >Submit Your Testimonial <Icons icon={"Up"} /> </button>
      </div>
    </div>
  )
}

export default Discover