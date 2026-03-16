import React from 'react'
import Icons from './Icons'

const Footer = () => {
    return (
        <div className='px-4'>
            <div className='mt-25 flex flex-col justify-center items-center max-w-[996.1px] mx-auto  '>
                <div className='max-w-[200.1px]  w-full  mx-auto'>
                    <Icons icon={"footerlogo"} />
                </div>
                <div className='w-full mt-15 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-10 '>
                    <div className='col-span-2 sm:col-span-1 w-full'>
                        <h1 className='sm:text-base text-sm text-secondary font-semibold leading-[100%] mb-3'>
                            Rated 4.9 on trustpilot.
                        </h1>
                        <Icons icon={"footerstar"} />
                    </div>
                    <ul className='gap-y-3 flex flex-col w-full'>
                        <h1 className='text-base font-semibold leading-[100%] text-secondary'>Quick Links</h1>
                        <li className='text-base font-normal leading-[150%] text-secondary'>Home</li>
                        <li className='text-base font-normal leading-[150%] text-secondary'>Programs</li>
                        <li className='text-base font-normal leading-[150%] text-secondary'>How It Works</li>
                        <li className='text-base font-normal leading-[150%] text-secondary'>About</li>
                        <li className='text-base font-normal leading-[150%] text-secondary'>Testimonials</li>
                    </ul>
                    <ul className='gap-y-3 flex flex-col w-full'>
                        <h1 className='text-base font-semibold leading-[100%] text-secondary'>Legal</h1>
                        <li className='text-base font-normal leading-[150%] text-secondary'>Terms & Conditions</li>
                        <li className='text-base font-normal leading-[150%] text-secondary'>Privacy Policy</li>
                    </ul>
                    <ul className='gap-y-3 flex max-w-[257.1px] flex-col w-full '>
                        <h1 className='text-base font-semibold leading-[100%] text-secondary'>Contact</h1>
                        <li className='text-base font-normal leading-[150%] text-secondary flex flex-row gap-3.5 items-start'>
                            <Icons icon={"phone"} /> 520-702-5510
                        </li>
                        <li className='text-base font-normal leading-[150%] text-secondary underline flex flex-row gap-2 items-start'>
                            <Icons icon={"mail"} /> Admin@rabbitfunding.io
                        </li>
                        <li className='text-base font-normal leading-[150%] text-secondary flex flex-row gap-2 items-start'>
                            <Icons icon={"location"} /> 28 Liberty St, NY, NY, 10005
                        </li>
                    </ul>

                </div>
            </div>
            <div className='mt-15 border-t border-dark px-4 sm:px-6 lg:px-8'>
                <div className='max-w-[996.1px] mx-auto flex justify-center py-4'>
                    <h1 className='text-secondary leading-[150%] text-xs sm:text-sm lg:text-base font-normal text-center'>
                        © 2026 Rabbit Funding, LLC. All rights reserved.
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Footer