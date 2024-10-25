"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "@@/services/machine/1.png";
import img2 from "@@/services/machine/2.png";
import img3 from "@@/services/machine/1.png";
import img4 from "@@/services/machine/2.png";
import MachineCenterCard from "./MachineCenterCard";

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute right-0 top-1/2 z-10 transform-translate-y-1/2 bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-300"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute left-0 z-10 top-1/2 transform-translate-y-1/2 bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-300"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

const MachinesCenter = () => {
  const machineParts = [
    {
      id: 1,
      name: "CNC Machining Services",
      imgUrl: img1,
    },
    {
      id: 2,
      name: "Materials Machined",
      imgUrl: img2,
    },
    {
      id: 3,
      name: "Surface Finishing Services",
      imgUrl: img3,
    },
    {
      id: 4,
      name: "Precision Engineering",
      imgUrl: img4,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="my-3 md:my-5 py-4 bg-[#252B42]">
      <div className="main_containe relative">
        <h6 className="text-center text-base  pt-4  text-white">
        Our Galley
        </h6>
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white my-4 md:mb-9">
          Our CNC Machining Center
        </h2>
        <Slider {...settings}>
          {machineParts.map((part, i) => {
            return (
              <MachineCenterCard key={part.id} part={part}></MachineCenterCard>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default MachinesCenter;
