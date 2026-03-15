import React from "react";
import { Arrow, Money, Star, Tick } from "../component/common/Icon";


const features = [
    {
        icon: (
         <Star />

        ),
        title: "Smarter Systems.",
        desc: "Faster Funding.",
    },
    {
        icon: (
    < Money/>
        ),

        title: "Approvals That",
        desc: "Make Sense",
    },
    {
        icon: (
            <Arrow />

        ),
        title: "No Suits. No Scripts.",
        desc: "Just Results.",
    },
    {
        icon: (
     <Tick />

        ),
        title: "Tech that speeds",
        desc: "things up",
    },
];

const BetterTech = () => {
    return (
        <div className="w-full bg-[#F6F6F6] py-15 ">
            <div className="max-w-[1100px] mx-auto px-6">

               
                <h2 className="w-full text-center font-montserrat font-bold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[120%] tracking-normal text-[#2B2B2B]">
                    Better Tech. Better Team. Better Lending
                </h2>

             
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-12 text-center">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center w-full max-w-[286px] h-[166px] mx-auto"
                        >

                         
                            <div className="w-[58px] h-[58px] bg-[#7AC943] rounded-lg flex items-center justify-center text-white text-xl">
                                {item.icon}
                            </div>

                          
                            <h3 className="mt-3 font-['Rubik'] font-semibold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[100%] text-center text-[#2B2B2B]">
                                {item.title}
                            </h3>

                            <h3 className="mt-3 font-['Rubik'] font-semibold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[100%] text-center text-[#2B2B2B]">
                                {item.desc}
                            </h3>

                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
};

export default BetterTech;