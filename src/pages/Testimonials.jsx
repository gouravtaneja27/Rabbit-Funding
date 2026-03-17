import React from "react";
import profile1 from "../assets/images/profile1.png";
import profile2 from "../assets/images/profile2.png";
import profile3 from "../assets/images/profile3.png";
import profile4 from "../assets/images/profile4.png";
import { Stars } from "../component/common/Icon";
const testimonials = [
    {
        text: "They told me not to take the money. That’s when I knew they were the real deal. I came in looking for a quick MCA. Desperate to cover payroll, decent credit, but margins were razor-thin. Rabbit actually looked through my statements — and told me not to take the deal. They didn’t pitch a workaround. They didn’t try to ‘make it fit.’ They just explained the risk, broke down the cash flow, and told me to wait. No one else would’ve done that. That advice alone probably saved my business.",
        name: "Mike T.",
        role: "Fabrication Shop Owner, TX",
        img: profile1,
    },
    {
        text: "We came for a loan. They gave us a strategy. We were asking for funding. Rabbit told us we didn’t need a loan — we needed to stop waiting 60 days to get paid. They helped us switch to invoice factoring. At first, we were hesitant. Now we get paid the same week the job ends, and payroll's no longer a stress point. They didn’t just fund us — they fixed our cash flow.",
        name: "Reggie D.",
        role: "Commercial Painting, IL",
        img: profile2,
    },
    {
        text: "Out of the blue, Emile asked if I owned any property — and it saved me. I run three salons. Business was booming, but I got tricked into a high-interest MCA by a broker who promised the world. Payments were crushing me. Out of nowhere, Emile asked if I owned any real estate — I said yes, and he begged me to refinance. Rabbit helped me use a DSCR loan to pay off the debt.",
        name: "Tameka R.",
        role: "Salon Owner, GA",
        img: profile3,
    },
    {
        text: "They built a payment plan around my slow season.I run an event rental company — winter is brutal.Every lender I spoke to offered cookie- cutter terms that didn’t match how my cash flows.Rabbit actually listened.They structured a step - up repayment plan that gave me a cushion during the slow months and scaled when things picked back up.I stayed current, grew the business, and didn’t lose my mind in January.Nobody else is underwriting like this.",
        name: "Vanessa C.",
        role: "Event Rentals, NJ",
        img: profile4,
    },
];
const Testimonials = () => {
    return (
        <div className="w-full bg-[#F6F6F6] py-20">
            <div className="max-w-[1190px] mx-auto px-6">
                <h2 className="text-center font-['Montserrat'] font-bold text-[16px] sm:text-[36px] lg:text-[48px] leading-[120%] text-[#2B2B2B] ">
                    Real People. Real Results.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.06)] flex flex-col w-full max-w-[558px] min-h-[394px]"
                        >
                            <div className="flex mb-3">
                                <Stars />
                            </div>
                            <p className=" text-base leading-[150%] text-[#4E4E4E]">
                                {item.text}
                            </p>
                            <div className="flex items-center border-t border-[#2B2B2B]/10 gap-3 mt-auto pt-6">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-12.5 h-12.5 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold text-[14px] text-[#2B2B2B]">
                                        {item.name}
                                    </h4>
                                    <p className="text-[12px] text-[#7A7A7A]">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;