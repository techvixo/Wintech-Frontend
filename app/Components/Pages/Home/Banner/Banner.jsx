"use client"
import Slider from "react-slick";
import bannerImg1 from "@@/home-img/banner/1.png"
import bannerImg2 from "@@/home-img/banner/2.png"
import bannerImg3 from "@@/home-img/banner/3.png"
import bannerImg4 from "@@/home-img/banner/4.png"
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
        waitForAnimate: false
    };
    const sliderData = [
        {
            id: 1,
            title: "Luxuriate in Unmatched Comfort",
            des: "Discover Our Exclusive Hotel Amenities for Your Ultimate Stay",
            img: bannerImg1,
            link: "/",
            button: ""
        },
        {
            id: 2,
            title: "Luxury Hotel Amenities: Elevate Your Stay",
            des: "Discover the epitome of comfort and elegance with our unparalleled hotel amenities",
            img: bannerImg2,
            link: "/",
            button: ""
        },
        {
            id: 3,
            title: "Premium Hotel Amenities: Experience Excellence",
            des: "Indulge in the finest hotel amenities designed to elevate your stay to new heights",
            img: bannerImg3,
            link: "/",
            button: ""
        },
        {
            id: 3,
            title: "Elite Hotel Amenities: Redefining Comfort and Luxury",
            des: "Step into a world of unparalleled luxury and comfort with our exclusive hotel amenities.",
            img: bannerImg4,
            link: "/",
            button: ""
        },
    ]
    return (
        <div id="banner" className="md:banner overflow-hidden ">
            <div className="slider-container w-full h-full">
                <Slider {...settings}>
                    {
                        sliderData.map((slider, i) => {
                            // console.log(slider.img)
                            return (
                                <div id="banner_slider" key={i} className="relative w-full h-full">
                                    <div className="contain absolute top-0 left-0 w-full h-full ">
                                        <div className="main_container flex justify-center flex-col gap-4 w-full h-full text-white ">
                                            <p
                                                initial={{ x: -100, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{
                                                    duration: "1",
                                                    delay: "0"
                                                }}
                                                className="text-white uppercase text-sm">welcome</p>
                                            <h2
                                                initial={{ y: -100, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{
                                                    duration: "1",
                                                    delay: "0.2"
                                                }}
                                                className="text-xl text-white font-bold md:text-3xl capitalize md:w-2/3">{slider?.title}</h2>
                                            <p
                                                initial={{ y: -100 }}
                                                whileInView={{ y: 0 }}
                                                transition={{
                                                    duration: "1",
                                                    delay: "0.3"
                                                }}
                                                className="text-white text-sm">{slider?.des}</p>
                                            <Link href={"/"}>
                                                <button
                                                    initial={{ x: -100, opacity: 0 }}
                                                    whileInView={{ x: 0, opacity: 1 }}
                                                    transition={{
                                                        duration: "1",
                                                        delay: "1"
                                                    }}
                                                    type="button" className="bg-white  uppercase text-xs rounded-none text-black btn btn-sm w-40">Explore Amenities</button>
                                            </Link>
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
                                            <span id="icon" className="text-xl pb-1"><MdOutlineKeyboardDoubleArrowDown /></span>
                                            <span>scroll down</span>
                                            {/* <span>to start the experience</span> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Banner