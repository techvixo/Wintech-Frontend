import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";
import { TiStarFullOutline } from "react-icons/ti";

const TestimonialCard = ({ name, des, rating, imgUrl }) => {
  return (
    <div className="px-2 my-5 md:my-8">
      <div className="testimonial_card p-2  md:p-4 md:py-6 rounded-md md:rounded-xl relative">
        <div className="top_icon absolute top-[-30px] md:top-[-40px] left-0 w-full p-2 md:px-4">
          <span className="bg-[#E4E5DF] w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center text-secondary font-semibold text-xl">
            <ImQuotesLeft />
          </span>
        </div>
        <div className="flex items-center justify-between my-1 mt-2 gap-3">
          <div className="left_t_content">
            <p className="text-[#08110C] text-base md:text-lg font-semibold capitalize">{name}</p>
            <p className="flex items-center gap-1">
              <span>{rating}</span>
              <span className=" text-[#E7AA3D]">
                <TiStarFullOutline />
              </span>
              <span className=" text-[#E7AA3D]">
                <TiStarFullOutline />
              </span>
              <span className=" text-[#E7AA3D]">
                <TiStarFullOutline />
              </span>
              <span className=" text-[#E7AA3D]">
                <TiStarFullOutline />
              </span>
              <span className=" text-[#E7AA3D]">
                <TiStarFullOutline />
              </span>
            </p>
          </div>
          <div className="w-10 m:w-18 h-10 md:h-18">
            <Image
              width={100}
              src={imgUrl}
              alt={name}
              className="w-full rounded-full"
            />
          </div>
        </div>
        <p className="text-[#000000] text-sm md:text-base">{des}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
