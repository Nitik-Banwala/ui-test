
import { CARDDATA } from "../utils/helper";
import Icons from './common/Icons';
const Funding = () => {
    return (
        <div>
            <div className='flex flex-col md:mb-97.5 mb-60 mt-22.5 md:mt-42.5 max-w-285 mx-auto px-4 justify-center items-center text-center'>
                <h2 className='font-bold text-primary sm:text-5xl text-3xl leading-[120%]'>
                    Real Stories. Real Funding.
                </h2>
                <p className='text-secondary text-sm sm:text-base leading-[150%] font-normal max-w-147.5 '>We’ve helped small businesses from all industries get approved and grow fast. Here’s what they had to say:</p>
                <div className='mt-15 grid min-[792px]:grid-cols-2 min-[1157.1px]:grid-cols-3 gap-6 w-full justify-items-center max-[320px]:justify-items-stretch'>
                    {CARDDATA.map((data, index) => (
                        <div
                            key={index}
                            className='min-[1157.1px]:w-[364.1px] max-w-[364.1px] h-[240.1px] max:[400.1px]:h-auto p-6 rounded-3xl shadow-[0_4px_54px_0_rgba(0,0,0,0.05)]'
                        >
                            <div className='flex flex-col h-full justify-between'>
                                <div >
                                    <Icons icon={data.stars} />
                                    <p className='text-left mt-4 max-w-127.5 font-normal text-base leading-[150%] text-secondary'>
                                        {data.text}
                                    </p>
                                </div>

                                <div className='max-[400.1px]:mt-2' >
                                    <div className='w-full border-t border-secondary opacity-10'></div>
                                    <div className=' gap-x-3 w-full sm:max-w-127.5 pt-4 flex flex-row'>
                                        <img src={data.image} alt="jhfn cmv" className='shrink-0 max-w-12.5 max-h-12.5 w-full h-full' />
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

export default Funding