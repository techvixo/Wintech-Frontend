import Link from "next/link";
// Import your images
import img1 from "@@/about-img/facilities/1.png";
import img2 from "@@/about-img/facilities/2.png";
import img3 from "@@/about-img/facilities/3.png";
import img4 from "@@/about-img/facilities/4.png";
import Image from "next/image";

const OurTeam = () => {
  const data = [
    {
      id: 1,
      icon: img1,
      title: "manufacturer",
      link: "/",
    },
    {
      id: 2,
      icon: img2,
      title: "Quality Guaranteed",
      link: "/",
    },
    {
      id: 3,
      icon: img3,
      title: "Short Turnaround Lead Time",
      link: "/",
    },
    {
      id: 4,
      icon: img4,
      title: "Cost Effective",
      link: "/",
    },
  ];
  return (
    <div className="py-3 md:py-5">
      <div className="main_container">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:mb-7">
      Our Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 pt-3">
            {data.map((item, i) => {
              return (
                <div key={i} className="flex flex-col justify-center items-center gap-5 p-6  md:py-16 md:gap-7 shadow md:shadow-lg hover:bg-[#F6F6F6] transition rounded md:rounded-md">
                  <Image
                    width={100}
                    src={item.icon}
                    alt={item.title}
                    className="w-12 md:w-16"
                  />
                  <h4 className="capitalize text-center font-semibold  text-[#222F66]">
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
};

export default OurTeam;
