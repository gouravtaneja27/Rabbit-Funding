import { Footer_links } from "../utils/helper";
import {  Location, Logo, Mail, Phone, TrustPiolet } from "./common/Icon";
const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <div className="  w-full  bg-[#F5F5F5] mt-99.5 px-4">
          
            <div className="max-w-285 mx-auto relative flex flex-col items-center pt-50 gap-15 ">
                <a href="/" className="max-w-74.5 w-full max-h-34 ">
                    <Logo  />
                </a>

                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 max-w-[996px] min-h-[200px] w-full mx-auto">
                    <div className="flex flex-col gap-3">
                        <span className="text-secondary font-semibold">
                            Rated 4.9 on trustpilot.
                        </span>
                        <TrustPiolet className={"md:h-20.25 md:w-42.75 h-15 w-30"} />
                    </div>
                    {Footer_links.map((item, i) => (
                        <div className="flex flex-col gap-3" key={i}>
                            <h3 className="text-secondary font-semibold">{item.title}</h3>
                            <ul className="flex flex-col gap-3">
                                {item.links.map((item, idx) => (
                                    <li key={idx}>
                                        <a href="">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="md:flex flex-col gap-3  ">
                        <h3 className="text-secondary font-semibold ">Contact</h3>
                        
                        <ul className="gap-3  sm:mt-0 mt-5 flex flex-col ">
                            <li>
                                <a href="tel:520-702-5510" className="flex gap-2 group "> 
                                  
                                    <Phone className={"group-hover:fill-[#5daf50 ]"} />
                                    520-702-5510
                                </a>
                            </li>
                            <li className="">
                                <a
                                    href="mailto:Admin@rabbitfunding.io"
                                    className="flex gap-2 group underline"
                                >
                                   
                                    <Mail className={"group-hover:fill-[#5daf50]"} />
                                    Admin@rabbitfunding.io
                                </a>
                            </li>
                            <li className="">
                                <a href="geo:NY" className="flex gap-2 group w-[247px] h-[24px]">
                                  
                                    <Location className={"group-hover:fill-[#5daf50] "} />
                                    28 Liberty St, NY, NY, 10005
                                </a>
                            </li>
                            </ul>

                    </div>
                </div>
                <div className="text-center pb-3.5 w-full flex flex-col gap-4 px-4">
                    <span className="border border-primary opacity-10 w-full "></span>
                    <p>© {date} Rabbit Funding, LLC. All rights reserved.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;