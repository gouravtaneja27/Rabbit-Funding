
import { Stars } from "./Icon";

const Card = ({ desc, name, profession, image }) => {
    return (
        <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-between gap-5 sm:gap-6 lg:gap-7 
    shadow-[0_4px_54px_0_rgba(0,0,0,0.05)] rounded-3xl 
    hover:scale-[1.02] cursor-pointer transition-all duration-300 bg-white">


            <div className="flex gap-3 sm:gap-4 flex-col">
                <Stars />

                <p className="text-sm sm:text-base text-secondary font-normal leading-[150%] text-[#2b2b2b]">
                    {desc}
                </p>
            </div>


            <div className="flex flex-col gap-4">
                <span className="border border-primary opacity-10 w-full"></span>

                <div className="flex items-center gap-3">
                    <img
                        src={image}
                        alt={name}
                        className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
                    />

                    <div className="flex flex-col">
                        <h3 className="text-sm sm:text-base text-primary font-semibold">
                            {name}
                        </h3>

                        <p className="text-xs sm:text-sm text-secondary font-normal text-[#2B2B2B]">
                            {profession}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;