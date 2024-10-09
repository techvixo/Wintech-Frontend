import Link from "next/link";
// Import your images
import img1 from "@@/home-img/why-chose-us/1.png";
import img2 from "@@/home-img/why-chose-us/2.png";
import img3 from "@@/home-img/why-chose-us/3.png";
import Image from "next/image";

const WhyChooseUs = () => {
  const data = [
    {
      id: 1,
      icon: img1,
      title: "Exceptional Quality",
      des: "In summary, a well-defined SEO strategy can boost your business whether it is small or medium in scale. Most of the time small business owners struggle for building a solid SEO strategy for success path. Contact us today!",
      link: "/",
    },
    {
      id: 2,
      icon: img2,
      title: "Fast Turnaround",
      des: "Salesforce is an integrated customer relationship management (CRM) platform that brings companies and customers together in a solution. It includes all the departments like management, HR, marketing, sales, commerce, and customer services...",
      link: "/",
    },
    {
      id: 3,
      icon: img3,
      title: "Cost-Effective Solutions",
      des: "American Best IT Ltd. offers digital PR services in Bangladesh which involve getting high-quality backlinks from websites and blogs and honest customer reviews. Digital PR aids you to reach your target audience by featuring your products...",
      link: "/",
    },
  ];
  return (
    <div className="py-5 md:py-8 bg-[#E4E5DF]">
      <div className="main_container">
        <div className="">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
            Why choose us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
            {data.map((item, i) => {
              return (
                <div key={i} className="bg-white shadow h-full">
                  <div className="top_s bg-[#00000005] p-1 px-4 md:px-6 pt-3">
                    <div className="h-16 w-full my-3 md:my-5">
                      <Image
                        width={100}
                        src={item.icon}
                        alt={item.title}
                        className="w-auto h-full"
                      />
                    </div>
                    <h4 className="capitalize font-semibold text-xl text-[#252B42]">{item.title}</h4>
                  </div>
                  <div className="p-4 md:p-6">
                  <p className="text-[#000000]">{item.des}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center md:my-4">
          <Link href={"/services"}>
            <button
              className=" font-semibold md:mt-4  bg-gradient-to-r from-[#4177B7] to-[#86BCFC]  hover:bg-gradient-to-r hover:from-[#86BCFC] hover:to-[#4177B7] p-2 text-sm md:text-md px-3 md:px-10 rounded-md text-[#FFFFFF]  transition"
            >
              SEE OUR WORK
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
