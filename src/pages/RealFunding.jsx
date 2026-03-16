import Cards from "../component/common/Cards";
import Heading from "../component/common/Heading";
import { Real_List } from "../utils/helper";

import {  Aro} from "../component/common/Icon";
import Button from "../component/common/Button";



const RealFunding= () => {
    return (
        <div className="w-full mx-auto lg:mt-42.5 mt-10 px-4">
            <div className="max-w-285 w-full mx-auto flex flex-col gap-15 items-center relative lg:text-left text-center">
                <Heading
                    h2={"Real Stories. Real Funding."}
                    parentCss={"gap-3 items-center"}
                    p={
                        "We’ve helped small businesses from all industries get approved and grow fast. Here’s what they had to say:"
                    }
                    pCss={"max-w-[590px] w-full text-center"}
                />
                <div className="grid md:grid-cols-3 gap-6 md:px-0 px-6">
                    {Real_List.map((item, index) => (
                        <div key={index} className="flex ">
                            <Cards
                                desc={item.desc}
                                name={item.name}
                                profession={item.profession}
                            />
                        </div>
                    ))}
                </div>
                <div
                    className="max-w-285 w-full absolute mx-auto items-center flex flex-col text-center rounded-3xl text-white  -bottom-126 lg:max-h-82 overflow-hidden"
                    style={{
                        background: "linear-gradient(to bottom, #7AC943, #4CAF50)",
                    }}
                >
                    <div
                        className="absolute inset-0 rounded-3xl"
                        style={{
                            backgroundImage: "url(/assets/Images/Png/Bg-img2.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            opacity: 0.5,
                        }}
                    />
                    <div className="relative z-10 max-w-189.5 w-full flex flex-col px-4 items-center mt-15 mb-15 px-">
                        <h4 className="lg:text-custom-3xl md:text-3xl text-2xls font-bold leading-[120%]">
                            Love what Rabbit Did for You! <br /> Share your story and help
                            others discover human-first funding.
                        </h4>
             
                        <Button
                            text="Submit Your Testimonial"
                            className="flex items-center gap-2 py-3 md:py-4 px-5 md:px-8 mt-8 rounded-full bg-dark-green text-white border border-black/20 hover:bg-green transition-all duration-300 cursor-pointer  "
                            icon={<Aro />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealFunding;