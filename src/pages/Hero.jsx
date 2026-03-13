

import p from "../assets/p.webp";

const Hero = () => {
    return (
        <div className="w-full flex items-center mt-10">

            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 w-full gap-10">

                
                <div className="order-1 md:order-2 w-full flex justify-center  lg:w-auto  ">
                    <img
                        src={p}
                        alt="p"
                        className=" w-full max-w-148 h-auto"
                    />
                </div>

               
                <div className="order-2 md:order-1 max-w-[490px] text-center md:text-left">

                    <h1 className="font-montserrat font-bold text-[40px] md:text-[52px] leading-[120%] text-[#2B2B2B]">
                        Built by People.
                        <br />
                        Backed by Tech.
                    </h1>

                    <p className="font-montserrat text-[16px] leading-[150%] text-gray-500 mt-4">
                        We're not a software company pretending to care.<br />
                        We're real underwriters — with real decision-making power<br />
                        — using tech to move faster, not think for us.
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

            </div>

        </div>
    );
};

export default Hero;