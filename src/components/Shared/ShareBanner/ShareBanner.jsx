import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const ShareBanner = ({ bannerBg, title, link }) => {
  return (
    <section>
      <div
        id="banner_section"
        className="h-[20vh] md:h-[40vh]"
        style={{
          // height: "67vh",
          backgroundImage: `url(${bannerBg.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
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

export default ShareBanner;
