import React from "react";
import p from "../assets/p.webp";
import Button from "../component/common/Button";
import { Aro } from "../component/common/Icon";
import Navbar from "../component/Navbar";
const Hero = () => {
    return (
        <div className="max-w-360 m-auto w-full  mb-22.5 bg-[linear-gradient(180deg,rgba(76,175,80,0.1)_0%,rgba(76,175,80,0)_100%)] ">
<Navbar />

            <div className="px-4 lg:px-2 max-w-300 m-auto flex flex-col lg:flex-row items-center justify-between lg:gap-0 gap-10 w-full">
                <div className="text-center lg:text-left">
                    <h1 className="font-bold text-[36px] sm:text-[44px] lg:text-[52px] leading-[120%] text-[#2B2B2B] max-w-122.5">
                        Built by People. Backed by Tech.
                    </h1>

                    <p className="max-w-122.5 mt-4 font-normal text-base leading-[150%] text-[#4E4E4E]">
                        We’re not a software company pretending to care.
                        <br className="hidden lg:block" /> We’re real underwriters — with real decision-making power —
                        using tech to move faster, not think for us.
                    </p>
                    <Button text="Join the Success" className="mt-8 w-[231px] h-[60px] flex items-center justify-center rounded-full bg-[#7AC943] hover:bg-transparent border border-transparent hover:text-[#2b2b2b] hover:border-[#2b2b2b] hover:transition-all hover:ease-in-out hover:duration-500 text-white font-medium mx-auto md:mx-0 cursor-pointer"   icon={<Aro />}></Button>
                </div>

                <div className="w-full lg:w-auto min-[1360px]:translate-x-16 flex justify-center">
                    <img

                        src={p}
                        alt="p"
                        className="w-full max-w-148 h-auto"
                    />
                </div>
            </div>
        </div>

    );
};

export default Hero;





