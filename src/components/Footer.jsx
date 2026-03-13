
import { FEATURE } from "../utils/helper";

const BetterSection = () => {
    return (
        <div className="w-full max-w-360 mx-auto  py-16">
            <div className="max-w-285 mx-auto px-6">
                <h1 className="text-[48px] font-bold text-center text-[#1A1A1A] leading-[120%]">
                    Better Tech. Better Team. Better Lending
                </h1>
                <div className="flex justify-between items-start mt-14">
                    {FEATURE.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-5 w-[240px]">
                            <div className="w-[72px] h-[72px] bg-[#7AC943] rounded-[18px] flex items-center justify-center text-white text-[32px]">
                                {item.icon}
                            </div>
                            <p className="text-[18px] font-bold text-center text-[#1A1A1A] leading-[140%] whitespace-pre-line">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default BetterSection;