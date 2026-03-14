// import React from "react";
// import i1 from "../assets/i1.png";
// import i2 from "../assets/i2.png";
// import i3 from "../assets/i3.png";
// import i4 from "../assets/i4.png";

// const testimonials = [
//     {
//         text: "They told me not to take the money. That’s when I knew they were the real deal. I came in looking for a quick MCA. Desperate to cover payroll, decent credit, but margins were razor-thin. Rabbit actually looked through my statements — and told me not to take the deal. They didn’t pitch a workaround. They didn’t try to ‘make it fit.’ They just explained the risk, broke down the cash flow, and told me to wait. No one else would’ve done that. That advice alone probably saved my business.",
//         name: "Mike T.",
//         role: "Fabrication Shop Owner, TX",
//         img: i1,
//     },
//     {
//         text: "We came for a loan. They gave us a strategy.We were asking for funding. Rabbit told us we didn’t need a loan — we needed to stop waiting 60 days to get paid. They helped us switch to invoice factoring. At first, we were hesitant. Now we get paid the same week the job ends, and payroll's no longer a stress point. They didn’t just fund us — they fixed our cash flow.",
//         name: "Reggie D.",
//         role: "Commercial Painting, IL",
//         img: i2,
//     },
//     {
//         text: "Out of the blue, Emile asked if I owned any property — and it saved me.I run three salons. Business was booming, but I got tricked into a high-interest MCA by a broker who promised the world. Payments were crushing me. Out of nowhere, Emile asked if I owned any real estate — I said yes, and he begged me to refinance. Rabbit helped me use a DSCR loan to pay off the debt. I saved over $35,000 a month in cash flow. It wasn’t just a loan. It was a way out. They asked the right questions — the kind that actually save people.",
//         name: "Tameka R.",
//         role: "Salon Owner, GA",
//         img: i3,
//     },
//     {
//         text: "They built a payment plan around my slow season. I run an  rental company — winter is brutal.Every lender I spoke to offered cookie- cutter terms that didn’t match how my cash flows.Rabbit actually listened.They structured a step - up repayment plan that gave me a cushion during the slow months and scaled when things picked back up.I stayed current, grew the business, and didn’t lose my mind in January.Nobody else is underwriting like this.",

//         name: "Vanessa C.",
//         role: "Event Rentals, NJ",
//         img: i4,
//     },
// ];

// const Testimonials = () => {
//     return (
//         <div className="w-full bg-[#F6F6F6] py-20">
//             <div className="max-w-[1190px] mx-auto px-6">


//                 <h2 className="text-center font-['Montserrat'] font-bold text-[28px] sm:text-[36px] lg:text-[48px] leading-[120%] text-[#2B2B2B]">
//                     Real People. Real Results.
//                 </h2>


//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">

//                     {testimonials.map((item, index) => (
//                         <div
//                             key={index}
//                             className="bg-white rounded-4xl p-6 shadow-sm flex flex-col w-[558px] h-[394px]"
//                         >


//                             <div className="flex text-orange-400 mb-3">
//                                 <svg width="136" height="24" viewBox="0 0 136 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <g clip-path="url(#clip0_278_1043)">
//                                         <path d="M11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26Z" fill="#FFB74D" />
//                                     </g>
//                                     <g clip-path="url(#clip1_278_1043)">
//                                         <path d="M39.9999 18.26L32.9469 22.208L34.5219 14.28L28.5869 8.792L36.6139 7.84L39.9999 0.5L43.3859 7.84L51.4129 8.792L45.4779 14.28L47.0529 22.208L39.9999 18.26Z" fill="#FFB74D" />
//                                     </g>
//                                     <g clip-path="url(#clip2_278_1043)">
//                                         <path d="M67.9999 18.26L60.9469 22.208L62.5219 14.28L56.5869 8.792L64.6139 7.84L67.9999 0.5L71.3859 7.84L79.4129 8.792L73.4779 14.28L75.0529 22.208L67.9999 18.26Z" fill="#FFB74D" />
//                                     </g>
//                                     <g clip-path="url(#clip3_278_1043)">
//                                         <path d="M95.9999 18.26L88.9469 22.208L90.5219 14.28L84.5869 8.792L92.6139 7.84L95.9999 0.5L99.3859 7.84L107.413 8.792L101.478 14.28L103.053 22.208L95.9999 18.26Z" fill="#FFB74D" />
//                                     </g>
//                                     <g clip-path="url(#clip4_278_1043)">
//                                         <path d="M124 18.26L116.947 22.208L118.522 14.28L112.587 8.792L120.614 7.84L124 0.5L127.386 7.84L135.413 8.792L129.478 14.28L131.053 22.208L124 18.26Z" fill="#FFB74D" />
//                                     </g>
//                                     <defs>
//                                         <clipPath id="clip0_278_1043">
//                                             <rect width="24" height="24" fill="white" />
//                                         </clipPath>
//                                         <clipPath id="clip1_278_1043">
//                                             <rect width="24" height="24" fill="white" transform="translate(28)" />
//                                         </clipPath>
//                                         <clipPath id="clip2_278_1043">
//                                             <rect width="24" height="24" fill="white" transform="translate(56)" />
//                                         </clipPath>
//                                         <clipPath id="clip3_278_1043">
//                                             <rect width="24" height="24" fill="white" transform="translate(84)" />
//                                         </clipPath>
//                                         <clipPath id="clip4_278_1043">
//                                             <rect width="24" height="24" fill="white" transform="translate(112)" />
//                                         </clipPath>
//                                     </defs>
//                                 </svg>

//                             </div>


//                             <p className="font-['Montserrat'] text-[14px] leading-[150%] text-[#4E4E4E]">
//                                 {item.text}
//                             </p>

                            

//                             <div className="flex items-center border-t border-[#2B2B2B]/10 gap-3 mt-auto pt-6">

//                                 <img
//                                     src={item.img}
//                                     alt={item.name}
//                                     className="w-10 h-10 rounded-full object-cover"
//                                 />

//                                 <div>
//                                     <h4 className="font-semibold text-[14px] text-[#2B2B2B]">
//                                         {item.name}
//                                     </h4>

//                                     <p className="text-[12px] text-[#7A7A7A]">
//                                         {item.role}
//                                     </p>
//                                 </div>
//                             </div>

//                         </div>
//                     ))}

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Testimonials;

import React from "react";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import i4 from "../assets/i4.png";

const testimonials = [
    {
        text: "They told me not to take the money. That’s when I knew they were the real deal. I came in looking for a quick MCA. Desperate to cover payroll, decent credit, but margins were razor-thin. Rabbit actually looked through my statements — and told me not to take the deal. They didn’t pitch a workaround. They didn’t try to ‘make it fit.’ They just explained the risk, broke down the cash flow, and told me to wait. No one else would’ve done that. That advice alone probably saved my business.",
        name: "Mike T.",
        role: "Fabrication Shop Owner, TX",
        img: i1,
    },
    {
        text: "We came for a loan. They gave us a strategy. We were asking for funding. Rabbit told us we didn’t need a loan — we needed to stop waiting 60 days to get paid. They helped us switch to invoice factoring. At first, we were hesitant. Now we get paid the same week the job ends, and payroll's no longer a stress point. They didn’t just fund us — they fixed our cash flow.",
        name: "Reggie D.",
        role: "Commercial Painting, IL",
        img: i2,
    },
    {
        text: "Out of the blue, Emile asked if I owned any property — and it saved me. I run three salons. Business was booming, but I got tricked into a high-interest MCA by a broker who promised the world. Payments were crushing me. Out of nowhere, Emile asked if I owned any real estate — I said yes, and he begged me to refinance. Rabbit helped me use a DSCR loan to pay off the debt.",
        name: "Tameka R.",
        role: "Salon Owner, GA",
        img: i3,
    },
    {
        text: "They built a payment plan around my slow season. I run a rental company — winter is brutal. Every lender I spoke to offered cookie-cutter terms that didn’t match how my cash flows. Rabbit actually listened and structured a step-up repayment plan that helped my business grow.",
        name: "Vanessa C.",
        role: "Event Rentals, NJ",
        img: i4,
    },
];

const Testimonials = () => {
    return (
        <div className="w-full bg-[#F6F6F6] py-20">
            <div className="max-w-[1190px] mx-auto px-6">

                {/* Heading */}
                <h2 className="text-center font-['Montserrat'] font-bold text-[28px] sm:text-[36px] lg:text-[48px] leading-[120%] text-[#2B2B2B]">
                    Real People. Real Results.
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">

                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.06)] flex flex-col w-full max-w-[558px] h-[394px]"
                        >

                            {/* Stars */}
                            <div className="flex mb-3">
                                <svg width="136" height="24" viewBox="0 0 136 24" fill="none">
                                    {[0, 28, 56, 84, 112].map((x, i) => (
                                        <path
                                            key={i}
                                            transform={`translate(${x})`}
                                            d="M11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26Z"
                                            fill="#FFB74D"
                                        />
                                    ))}
                                </svg>
                            </div>

                            {/* Text */}
                            <p className="font-['Montserrat'] text-[14px] leading-[150%] text-[#4E4E4E]">
                                {item.text}
                            </p>

                            {/* User */}
                            <div className="flex items-center border-t border-[#2B2B2B]/10 gap-3 mt-auto pt-6">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-10 h-10 rounded-full object-cover"
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