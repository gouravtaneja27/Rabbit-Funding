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
        <div className="w-full bg-[#F6F6F6]   py-15 ">
            <div className="max-w-[1208px]   mx-auto ">

               
                <h2 className="w-full text-center font-montserrat font-bold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[120%] tracking-normal text-[#2B2B2B]">
                    Better Tech. Better Team. Better Lending
                </h2>

             
                <div className="max-w-[1208px] h-[264px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-[40px] mt-12  text-center">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-start w-full"
                        >

                            <div className="w-[58px] h-[58px] bg-[#7AC943] rounded-lg flex items-center justify-center text-white text-xl">
                                {item.icon}
                            </div>

                            <h3 className="mt-4 font-['Rubik'] font-semibold text-[20px] leading-[100%] text-[#2B2B2B]">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-[14px] text-[#2B2B2B]">
                                {item.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
};

export default BetterTech;