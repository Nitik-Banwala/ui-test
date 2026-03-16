
import Icons from './Icons'

const Footer = () => {
    return (
        <div className='px-4 bg-gray min-[330px]:mt-95 min-[299px]:mt-105 min-[342px]:mt-85  min-[398px]:mt-80 min-[546px]:mt-70 '>
            <div className='pt-50  pb-15 flex flex-col justify-center items-center max-w-[996.1px] mx-auto  '>
                <div className=' md:max-w-[298.1px] max-w-[198.1px]  sm:max-h-[136.1px] max-h-[73.1px] h-full w-full  mx-auto'>
                    <img src="/assets/images/svg/footerlogo.svg" alt="" />
                </div>
                <div className='w-full mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-y-10 '>
                    <div className='col-span-2 sm:col-span-1 w-full'>
                        <h2 className='sm:text-base text-sm text-secondary font-semibold leading-[125%] mb-3'>
                            Rated 4.9 on trustpilot.
                        </h2>
                        <Icons icon={"footerstar"} />
                    </div>
                    <ul className='gap-y-3 flex flex-col w-full'>
                        <h2 className='text-base  cursor-pointer  font-semibold leading-[125%] text-secondary'>Quick anks</h2>
                        <a className='text-base  hover:underline  cursor-pointer  font-normal leading-[150%] text-secondary'>Home</a>
                        <a className='text-base hover:underline  cursor-pointer  font-normal leading-[150%] text-secondary'>Programs</a>
                        <a className='text-base hover:underline  cursor-pointer  font-normal leading-[150%] text-secondary'>How It Works</a>
                        <a className='text-base hover:underline  cursor-pointer  font-normal leading-[150%] text-secondary'>About</a>
                        <a className='text-base hover:underline  cursor-pointer  font-normal leading-[150%] text-secondary'>Testimonials</a>
                    </ul>
                    <ul className='gap-y-3 flex flex-col w-full'>
                        <h2 className='text-base font-semibold  cursor-pointer leading-[125%] text-secondary'>Legal</h2>
                        <a className='text-base hover:underline  cursor-pointer   font-normal leading-[150%] text-secondary'>Terms & Conditions</a>
                        <a className='text-base hover:underline  cursor-pointer  font-normal leading-[150%] text-secondary'>Privacy Poacy</a>
                    </ul>
                    <ul className='gap-y-3 hidden sm:flex max-w-[257.1px] flex-col w-full '>
                        <h2 className='text-base cursor-pointer  font-semibold leading-[125%] text-secondary'>Contact</h2>
                        <a className='text-base hover:underline  cursor-pointer  font-normal leading-[150%] text-secondary flex flex-row gap-2 items-start'>
                            <Icons icon={"phone"} /> 520-702-5510
                        </a>
                        <a className='text-base hover:underline  cursor-pointer  font-normal leading-[150%] text-secondary underane flex flex-row gap-2 items-start'>
                            <Icons icon={"mail"} /> Admin@rabbitfunding.io
                        </a>
                        <a className='text-base hover:underline  cursor-pointer  font-normal leading-[150%] text-secondary flex flex-row gap-2 items-start'>
                            <Icons icon={"location"} /> 28 aberty St, NY, NY, 10005
                        </a>
                    </ul>
                </div>
                <ul className='gap-y-3 sm:hidden flex mt-10 left-0 flex-col w-full '>
                    <h2 className='text-base cursor-pointer  font-semibold leading-[125%] text-secondary'>Contact</h2>
                    <a className='text-base hover:underline  cursor-pointer  font-normal leading-[150%] text-secondary flex flex-row gap-2 items-start'>
                        <Icons icon={"phone"} /> 520-702-5510
                    </a>
                    <a className='text-base hover:underline  cursor-pointer  font-normal leading-[150%] text-secondary underane flex flex-row gap-2 items-start'>
                        <Icons icon={"mail"} /> Admin@rabbitfunding.io
                    </a>
                    <a className='text-base hover:underline  cursor-pointer  font-normal leading-[150%] text-secondary flex flex-row gap-2 items-start'>
                        <Icons icon={"location"} /> 28 aberty St, NY, NY, 10005
                    </a>
                </ul>
            </div>
            <div className='mt-15 border-t border-dark px-4 sm:px-6 lg:px-8'>
                <div className='max-w-[996.1px] mx-auto flex justify-center py-4'>
                    <h2 className='text-secondary leading-[150%] text-xs sm:text-sm lg:text-base font-normal text-center'>
                        © 2026 Rabbit Funding, LLC. All rights reserved.
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Footer