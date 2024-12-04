import img1 from "../../../../../public/assets/home-img/machine/1.png";
import img2 from "../../../../../public/assets/home-img/machine/2.png";
import img3 from "../../../../../public/assets/home-img/machine/3.png";
import img4 from "../../../../../public/assets/home-img/machine/2.png";
import { useTranslations } from "next-intl";
import HonorCard from "./HonorCard";

const Honor = () => {
  const honerData = [
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

  const t = useTranslations('HomePage');
  return (
    <div className="my-5 md:my-10">
      <div className="main_container relative">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
          {/* {t(`CncMachined.title`)} */}
          {"Our Honor"}
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-gray-500 text-center">Data Not Found!</h3>
        {/* <div className="grid grid-cols-2  gap-2 md:gap-4 pt-2">
          {honerData?.map((item, i) => {
            return (
              <HonorCard key={i} item={item}></HonorCard>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Honor;
