import React, { useState } from "react";
import { Logo } from "./common/Icon";
import Button from "./common/Button";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className="max-w-360 w-full m-auto relative">

            <div className="max-w-300 m-auto flex items-center justify-between py-5 px-4 ">
                <div className="flex items-center gap-2">
                    <Logo />
                </div>

                <ul className="hidden min-[900px]:flex gap-6 text-gray-700 font-medium">
                    <li className="font-montserrat  text-[16px] text-[#4E4E4E] cursor-pointer hover:text-black">Home</li>
                    <li className="font-montserrat  text-[16px] text-[#4E4E4E] cursor-pointer hover:text-black ">Programs</li>
                    <li className="font-montserrat  text-[16px] text-[#4E4E4E] cursor-pointer hover:text-black ">How It Works</li>
                    <li className="font-montserrat  text-[16px] text-[#4E4E4E] cursor-pointer hover:text-black li ">Testimonial</li>
                    <li className="font-montserrat  text-[16px] text-[#4E4E4E] cursor-pointer hover:text-black ">About</li>
                </ul>

                {/* <button className="w-[155px] h-[56px] hidden min-[900px]:block cursor-pointer border-2 border-[#2B2B2B] px-6 py-2 rounded-full hover:bg-green-600 hover:text-white transition font-montserrat font-semibold text-[16px]">
                    Contact Us
                </button> */}
                <Button text="Contact Us" className="w-[155px] h-[56px] hidden min-[900px]:block cursor-pointer border-2 border-[#2B2B2B] px-6 py-2 rounded-full hover:bg-green-600 hover:text-white transition font-montserrat font-semibold text-[16px]">
                    
                </Button>

                <div
                    className="min-[900px]:hidden flex flex-col gap-[5px] cursor-pointer relative z-[60]"
                    onClick={() => setMenu(!menu)}
                >
                    <span className={`block w-6 h-[3px] bg-black transition-all duration-300 ${menu ? "rotate-45 translate-y-[7px]" : ""}`}></span>
                    <span className={`block w-6 h-[3px] bg-black transition-all duration-300 ${menu ? "opacity-0" : ""}`}></span>
                    <span className={`block w-6 h-[3px] bg-black transition-all duration-300 ${menu ? "-rotate-45 -translate-y-[8px]" : ""}`}></span>
                </div>

            </div>
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-[#ECEFEC] z-50 flex flex-col items-center justify-center gap-8 transition-transform list-none duration-500 ${menu ? "translate-x-0" : "-translate-x-full"
                    } min-[900px]:hidden`}
            >
                <li>Home</li>
                <li>Programs</li>
                <li>How It Works</li>
                <li>Testimonial</li>
                <li>About</li>

                <button className="border-2 border-black px-6 py-2 rounded-full cursor-pointer ">
                    Contact Us
                </button>

            </div>

        </div>
    );
};

export default Navbar;