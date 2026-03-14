import React from "react";
import g from "../assets/g.png"; // apni image path rakh lena

const WhoBehind = () => {
    return (
        <div className="w-full bg-[#F6F6F6] py-16">
            <div className="max-w-[1100px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

                {/* Left Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src={g}
                        alt="g"
                        className="w-full max-w-[420px] h-auto"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">

                    <h2 className="font-montserrat font-bold text-[28px] sm:text-[32px] lg:text-[40px] leading-[120%] text-[#2B2B2B]">
                        Who’s Behind Rabbit
                    </h2>

                    <p className="mt-4 font-rubik text-[14px] sm:text-[15px] lg:text-[16px] leading-[150%] text-[#4E4E4E] max-w-[480px] mx-auto lg:mx-0">
                        Our team isn’t just from finance. We’re ex-operators, former
                        founders, and recovering bankers who got tired of saying “no”
                        when we knew there was a better way to fund.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default WhoBehind;