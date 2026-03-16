import Icons from "./common/Icons";

const WorkedWithRabbit = () => {
    return (
        <div className="bg-[linear-gradient(180deg,#4CAF501A_0%,#4CAF5000_100%)] mt-22.5 md:mt-42.5 px-4 ">
            <div className="max-w-[743.29px] mx-auto min-[730px]:py-25 py-20 flex justify-center items-center">
                <div className="z-0  ">
                 
                    <img src="/assets/images/svg/rabbit.svg" alt="" />
                </div>
                <div className="z-10  absolute flex items-center flex-col text-center" >
                    <h2 className="font-bold text-3xl sm:text-custom-5xl text-primary leading-[120%]  max-[535px]:px-2 ">Worked With Rabbit?</h2>
                    <p className="text-secondary leading-[150%] mt-3 font-normal sm:text-custom-1xl text-sm  max-w-132 max-[535px]:px-4 mx-auto  ">We love hearing success stories. Submit your testimonial and help others fund their story.</p>
                    <button className="  hover:bg-white hover:text-ternary hover:border mt-6 text-base font-semibold leading-[125%] hover:border-ternary group w-48 h-15 rounded-[200px] gap-1.5 bg-ternary flex flex-row justify-center items-center text-white ">
                        Share Yours <Icons icon={"Up"} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WorkedWithRabbit;