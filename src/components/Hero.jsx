import React from 'react'
import Icons from './common/Icons'


const Hero = () => {
    return (
        <div className='flex flex-col lg:flex-row max-w-285 mx-auto lg:justify-between items-center px-4 sm:px-6 lg:px-0'>
            <div className='max-w-122.5 mt-14 flex flex-col sm:mt-20 lg:mt-28'>
                <h1 className='text-4xl sm:text-5xl  lg:text-custom-5xl text-primary font-bold leading-[120%] text-center lg:text-left'>Built by People. Backed by Tech.</h1>
                <p className='text-base font-normal leading-[150%] mt-4 text-center text-secondary lg:text-left'>We're not a software company pretending to care. We're real underwriters — with real decision-making power — using tech to move faster, not think for us.</p>
                <div className='flex justify-center lg:justify-start'>
                    <button className=' group bg-ternary mt-8 hover:bg-white hover:text-ternary hover:border hover:border-ternary flex w-57.75 h-15 rounded-[200px] justify-center items-center gap-1.5 font-semibold text-base text-white'>
                        Join the Success <Icons icon={"Up"}/>
                    </button>
                </div>
            </div>
            <div className='flex justify-center lg:block mt-6 lg:mt-0'>
                <img src="/assets/images/Hero.webp" alt="" className='mt-10 min-[1299px]:translate-x-20 min-[1220px]:translate-x-10 translate-x-5  max-w-full' />
            </div>
        </div>
    )
}

export default Hero 