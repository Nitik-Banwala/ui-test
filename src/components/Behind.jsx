

const Behind = () => {
    return (
        <div className='px-4 mt-32.5 md:mt-42.5'>
            <div className='flex flex-col min-[1050px]:flex-row items-center min-[1050px]:items-start min-[1050px]:justify-between max-w-285 mx-auto gap-y-8 md:gap-y-0'>
                <div className='max-w-123 w-full md:w-auto'>
                    <img src="/assets/images/Persons.webp" alt="ikfnds" className='w-full' />
                </div>
                <div className='flex flex-col max-w-124 w-full text-center min-[1050px]:text-start  md:w-auto mt-0 md:mt-10 gap-y-3'>
                    <h2 className='text-primary font-bold text-3xl md:text-5xl leading-[120%]'>Who's Behind Rabbit?</h2>
                    <p className='sm:text-base text-sm font-normal leading-[150%] text-secondary'>Our team isn't just from finance. We're ex-operators, former founders, and recovering bankers who got tired of saying "no" when we knew there was a better way to fund.</p>
                </div>
            </div>
        </div>
    )
}

export default Behind