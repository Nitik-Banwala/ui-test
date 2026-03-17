
import { TESTIMONIALS } from "../utils/helper";
import Icons from './common/Icons';
const Results = () => {
    return (
        <div>
            <div className='flex flex-col max-w-293 mt-15 md:mt-42.5 px-4 mx-auto justify-center items-center text-center'>
                <h2 className='font-bold text-primary sm:text-5xl text-3xl leading-[120%]'>
                    Real People. Real Results.
                </h2>

                <div className='mt-15 grid grid-cols-1 min-[1027px]:grid-cols-2 gap-6 w-full justify-items-center min-[1027px]:justify-items-stretch'>
                    {TESTIMONIALS.map((data, index) => (
                        <div
                            key={index}
                            className='w-full sm:max-w-139.5 h-auto p-6 rounded-3xl shadow-[0_4px_54px_0_rgba(0,0,0,0.05)]'
                        >
                            <div className='flex flex-col h-full sm:max-h-98.5 justify-between'>
                                <div className='mb-6 sm:mb-12'>
                                    <Icons icon={data.stars} />
                                    <p className='text-left mt-4 max-w-127.5 font-normal sm:text-base text-sm leading-[150%] text-secondary'>
                                        {data.text}
                                    </p>
                                </div>

                                <div>
                                    <div className='w-full border-t border-secondary opacity-10'></div>
                                    <div className='flex flex-row gap-x-3 w-full sm:max-w-127.5 pt-4'>
                                        <img src={data.image} alt="jkherdbnf m" className='shrink-0 max-w-12.5 max-h-12.5 w-full h-full' />
                                        <div className='flex flex-col text-left py-1.25 justify-center '>
                                            <span className='text-base font-semibold leading-[125%] text-primary'>{data.name}</span>
                                            <span className='text-sm font-normal text-primary leading-[150%] '>{data.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Results