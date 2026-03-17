
import React, { useState, useEffect } from "react";
import { Logo } from "./common/Icon";
import Button from "./common/Button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        if (menu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [menu]);

    return (
        <div className="max-w-360 w-full m-auto relative">

            <div className="max-w-300 m-auto flex items-center justify-between py-5 px-4 ">
                <div className="flex items-center gap-2">
                    <Logo />
                </div>

                <ul className="hidden min-[900px]:flex gap-6 text-gray-700 font-medium">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `font-montserrat text-[16px] cursor-pointer hover:text-black ${isActive ? "text-[#2B2B2B]! font-semibold" : "text-[#4E4E4E]"
                                }`
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/programs"
                            className={({ isActive }) =>
                                `font-montserrat text-[16px] cursor-pointer hover:text-[#2b2b2b] ${isActive ? "text-[#2B2B2B]! font-semibold" : "text-[#4E4E4E]"
                                }`
                            }
                        >
                            Programs
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/how-it-works"
                            className={({ isActive }) =>
                                `font-montserrat text-[16px] cursor-pointer hover:text-black ${isActive ? "text-[#2B2B2B]! font-semibold " : "text-[#4E4E4E]"
                                }`
                            }
                        >
                            How It Works
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/testimonial"
                            className={({ isActive }) =>
                                `font-montserrat text-[16px] cursor-pointer hover:text-black ${isActive ? "text-[#2B2B2B]! font-semibold " : "text-[#4E4E4E]"
                                }`
                            }
                        >
                            Testimonial
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `font-montserrat text-[16px] cursor-pointer hover:text-black ${isActive ? "text-[#2B2B2B]! font-semibold " : "text-[#4E4E4E]"
                                }`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                </ul>

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
                <NavLink to="/" onClick={() => setMenu(false)}>Home</NavLink>
                <NavLink to="/programs" onClick={() => setMenu(false)}>Programs</NavLink>
                <NavLink to="/how-it-works" onClick={() => setMenu(false)}>How It Works</NavLink>
                <NavLink to="/testimonial" onClick={() => setMenu(false)}>Testimonial</NavLink>
                <NavLink to="/about" onClick={() => setMenu(false)}>About</NavLink>

                <Button text="Contact Us" className="border-2 border-black px-6 py-2 rounded-full cursor-pointer "></Button>
            </div>

        </div>
    );
};

export default Navbar;