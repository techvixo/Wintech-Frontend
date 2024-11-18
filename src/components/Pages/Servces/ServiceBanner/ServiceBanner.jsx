import { useTranslations } from "next-intl";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const ServiceBanner = ({ bannerBg, title, link }) => {
  const t = useTranslations('ServicePage');
  return (
    <section>
      <div
        id="service_banner_section"
        className="h-[50vh] md:h-[50vh]"
        style={{
          // height: "67vh",
          backgroundImage: `linear-gradient(90deg, #4179B6, #00000026), url(${bannerBg.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="main_container h-full">
          <div className="flex flex-col justify-center h-full w-full md:w-1/2 gap-4 ">
            <h2 className="text-2xl md:text-4xl font-bold text-white ">
            Product and Services
            </h2>
            <p className="text-sm md:text-base text-white">Looking for a reliable,quick-turn supplier of machined plastic and metal components?our unmatched in-house capacity ensures your parts are shipped .</p>
            <Link href={"/services"}>
              <button className="shadow md:shadow-md font-semibold bg-gradient-to-r from-[#4177B7] to-[#86BCFC]  hover:bg-gradient-to-r hover:from-[#86BCFC] hover:to-[#4177B7] p-2 text-base md:text-lg px-3 md:px-10 rounded-md text-[#FFFFFF]  transition">
              Get an instant quote
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="banner_bottom bg-[#252B421A] py-3 md:py-5">
        <div className="main_container">
          <p className="flex items-center gap-2 md:font-semibold text-sm">
            <span>Home</span>
            <span>
              <IoIosArrowForward />
            </span>
            <Link className="capitalize" href={link}>
              {link}
            </Link>
          </p>
          <h2 className="text-xl md:text-2xl font-bold uppercase text-[#252B42] ">
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
