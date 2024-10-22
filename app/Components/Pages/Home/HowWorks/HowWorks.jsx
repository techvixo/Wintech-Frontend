import worksImg from "@@/home-img/work-img/work-img.png";
import Image from "next/image";

const HowWorks = () => {
  const worksList = [
    {
      id: 1,
      title: "Fast Turnaround",
      des: "Salesforce is an integrated customer relationship management (CRM) platform that brings companies and customers together in a solution. It includes all the departments like ",
    },
    {
      id: 2,
      title: "Fast Turnaround",
      des: "Salesforce is an integrated customer relationship management (CRM) platform that brings companies and customers together in a solution. It includes all the departments like ",
    },
    {
      id: 3,
      title: "Direct Delivery To You",
      des: "Salesforce is an integrated customer relationship management (CRM) platform that brings companies and customers together in a solution. It includes all the departments like ",
    },
  ];
  return (
    <div className="py-3 md:py-5 ">
      <div className="main_container">
        <div className="">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
            How it Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            <div className="w-full">
              <Image
                width={1000}
                height={600}
                src={worksImg}
                alt={"work-image"}
                className="w-auto h-full"
              />
            </div>
            <div className="w-full flex flex-col gap-3 md:gap-5 bg-[#E4E5DF4D] p-4 md:p-6 md:px-10">
              {worksList.map((item, i) => {
                return (
                  <div key={i} className="h-full">
                    <h4 className="capitalize font-semibold text-md md:text-lg text-[#252B42]">
                      {item.title}
                    </h4>
                    <p className="text-[#000000] text-sm md:text-base">{item.des}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
