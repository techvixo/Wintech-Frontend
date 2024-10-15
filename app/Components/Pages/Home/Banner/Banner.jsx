"use client";
import Slider from "react-slick";
import bannerImg1 from "@@/home-img/banner/1.png";
import bannerImg2 from "@@/home-img/banner/2.png";
import bannerImg3 from "@@/home-img/banner/3.png";
import bannerImg4 from "@@/home-img/banner/4.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import Link from "next/link";

const Banner = () => {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  const sliderData = [
    {
      id: 1,
      title: "Precision CNC Machining for Industry Leaders",
      des: "Discover Our Exclusive Hotel Amenities for Your Ultimate Stay",
      img: bannerImg1,
      link: "/",
      button: "",
    },
    {
      id: 2,
      title: "Luxury Hotel Amenities: Elevate Your Stay",
      des: "Discover the epitome of comfort and elegance with our unparalleled hotel amenities",
      img: bannerImg2,
      link: "/",
      button: "",
    },
    {
      id: 3,
      title: "Premium Hotel Amenities: Experience Excellence",
      des: "Indulge in the finest hotel amenities designed to elevate your stay to new heights",
      img: bannerImg3,
      link: "/",
      button: "",
    },
    {
      id: 3,
      title: "Elite Hotel Amenities: Redefining Comfort and Luxury",
      des: "Step into a world of unparalleled luxury and comfort with our exclusive hotel amenities.",
      img: bannerImg4,
      link: "/",
      button: "",
    },
  ];
  return (
    <div id="banner" className="md:banner overflow-hidden ">
      <div className="slider-container w-full h-full">
        <Slider {...settings}>
          {sliderData.map((slider, i) => {
            return (
              <div
                id="banner_slider"
                key={i}
                className="relative w-full h-full"
              >
                <div className="contain absolute top-0 left-0 w-full h-full ">
                  <div className="main_container pt-9 flex justify-center items-center flex-col gap-7 w-full h-full text-white ">
                    <h2 className="text-3xl md:text-center text-white font-bold md:text-4xl capitalize ">
                      {slider?.title}
                    </h2>
                    <p className="text-white text-sm md:text-lg">{slider?.des}</p>
                    <div className="w-full flex items-center justify-center pt-5 md:pt-2">
                      <div className="md:w-2/3 h-12 md:h-14 bg-white relative w-full rounded-2xl">
                        <input
                          onChange={(e) => setInputValue(e.target.value)}
                          type="text"
                          required
                          placeholder="Search here.."
                          className={`absolute top-0 left-0 input h-full rounded-2xl input-bordered w-full `} // Add red border when email is not valid
                        />
                        <button
                          className="absolute top-0 right-0 w-24 md:w-36 h-full md:text-md rounded-r-2xl text-white bg-[#252B42]"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                    {/* <Link href={"/"}>
                      <button
                        type="button"
                        className="bg-white  uppercase text-xs rounded-none text-black btn btn-sm w-40"
                      >
                        Explore Amenities
                      </button>
                    </Link> */}
                  </div>
                </div>
                <Image
                  src={slider.img}
                  alt="banner-image"
                  width={1000}
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-0 bottom-4 flex justify-end w-full ">
                  <div className="flex flex-col pr-5 md:pr-10 items-center text-[8px] gap-[2px] uppercase text-white">
                    <span id="icon" className="text-xl pb-1">
                      <MdOutlineKeyboardDoubleArrowDown />
                    </span>
                    <span>scroll down</span>
                    {/* <span>to start the experience</span> */}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
