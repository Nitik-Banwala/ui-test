
import { FEATURE } from "../utils/helper";
import Icons from "./common/Icons";

const BetterSection = () => {
    return (
        <div className="w-full mx-auto bg-gray py-15">
            <div className="max-w-302 mx-auto px-6">
                <h1 className="font-bold text-center text-[#1A1A1A] leading-[120%] text-4xl md:text-5xl">
                    Better Tech. Better Team. Better Lending
                </h1>
                <div className="grid  max-[861px]:grid-cols-2 min-[861px]:grid-cols-4 gap-4 md:gap-7.25 justify-center mt-6">
                    {FEATURE.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-3 h-41.5 items-center justify-center w-full max-w-70 mx-auto"
                        >
                            <div className="h-14.5 w-14.5 rounded-xl bg-ternary flex justify-center items-center">
                                <Icons icon={item.icon} />

                            </div>
                            <span className="font-semibold lg:text-xl md:text-lg flex text-center text-primary max-w-51.5 w-full">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BetterSection;