import React from "react";
import rabbit from "../assets/rabbit.png";
import Button from "../component/common/Button";
import { Aro } from "../component/common/Icon";


const WorkedRabbit = () => {
    return (
        <section className="w-full py-24 bg-[#EAF3E5] h-[673px] relative overflow-hidden py-42.5 mt-10">

            
           

            <div className="max-w-[1200px] mx-auto  px-6 text-center relative z-10">
                <img
                    src={rabbit}
                    alt="rabbit"
                    className="absolute inset-0 m-auto opacity-5    pointer-events-none"
                />
            


                <h2 className="text-[32px] lg:text-[40px] font-bold text-[#2B2B2B]">
                    Worked With Rabbit?
                </h2>
                

                <p className="mt-4 text-[#4E4E4E] text-[16px] max-w-[520px] mx-auto leading-[150%]">
                    We love hearing success stories. Submit your testimonial
                    and help others fund their story.
                </p>

                <Button text="Share Yours" className="mt-8 px-8 py-4 rounded-full bg-[#7AC943] cursor-pointer text-white font-medium flex items-center gap-2 mx-auto hover:bg-transparent border border-transparent hover:border-[#2B2B2B] hover:text-[#2B2B2B] transition-all duration-300" icon={<Aro />}></Button>


            </div>

        </section>
    );
};

export default WorkedRabbit;