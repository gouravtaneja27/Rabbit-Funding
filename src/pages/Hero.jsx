

import React from "react";
import p from "../assets/p.webp";
const Hero = () => {
    return (
        <div className="max-w-360 m-auto w-full mt-10 mb-22.5 ">
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
                    <button className="mt-8 w-[231px] h-[60px] flex items-center justify-center rounded-full bg-[#7AC943] text-white font-medium mx-auto md:mx-0">
                        Join the Success <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3008_8)">
                                <path d="M15 10.41L6.393 19.017L4.979 17.603L13.586 8.99603H6V6.99603H17V17.996H15V10.411V10.41Z" fill="#FEFEFE" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3008_8">
                                    <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 -1 24 24)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </button>
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


