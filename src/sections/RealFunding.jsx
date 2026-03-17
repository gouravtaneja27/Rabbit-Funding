import Heading from "../component/common/Heading";
import { Real_List } from "../utils/helper";
import ii1 from "../assets/images/bg.png";
import { Aro } from "../component/common/Icon";
import Button from "../component/common/Button";
import Card from "../component/common/Card";
const RealFunding = () => {
    return (
        <div className="w-full mx-auto   px-4 bg-white ">
            <div className="max-w-285 mx-auto flex flex-col gap-15 items-center relative text-left lg:text-left">
                <Heading
                    h2={"Real Stories. Real Funding."}
                    parentCss={"gap-3 items-center"}
                    p={
                        "We’ve helped small businesses from all industries get approved and grow fast. Here’s what they had to say:"
                    }
                    pCss={"max-w-[590px] w-full text-center"}
                />
                <div className="grid md:grid-cols-3 gap-6 md:px-0 px-6 ">
                    {Real_List.map((item, index) => (
                        <Card key={index}
                            image={item.img}
                            desc={item.desc}
                            name={item.name}
                            profession={item.profession}
                        />
                    ))}
                </div>
                <div className="max-w-285 w-full absolute mx-auto items-center flex flex-col text-center rounded-3xl text-white  lg:-bottom-126 md:-bottom-100 -bottom-75 lg:max-h-82 overflow-hidden"
                    style={{
                        background: "linear-gradient(to bottom, #7AC943, #4CAF50)",
                    }}
                >
                    <div
                        className="absolute inset-0 rounded-3xl"
                        style={{
                            backgroundImage: `url(${ii1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            opacity: 0.5,
                        }}
                    />
                    <div className="relative z-10 max-w-189.5 w-full flex flex-col px-4 items-center md:top-0 mt-15 mb-15.5 px-">
                        <h4 className="lg:text-custom-3xl md:text-3xl text-2xls font-bold leading-[120%]">
                            Love what Rabbit Did for You! <br /> Share your story and help
                            others discover human-first funding.
                        </h4>

                        <Button
                            text="Submit Your Testimonial"
                            className="flex items-center gap-2 py-3 md:py-4 px-5 md:px-8 mt-8 rounded-full bg-[#010101]/20 text-white  transition-all duration-300 cursor-pointer  "
                            icon={<Aro />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RealFunding;