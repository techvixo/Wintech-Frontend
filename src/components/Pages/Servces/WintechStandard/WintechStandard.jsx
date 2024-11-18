import Link from "next/link";
// Import your images
import img1 from "../../../../../public/assets/services/standard/1.png";
import img2 from "../../../../../public/assets/services/standard/2.png";
import img3 from "../../../../../public/assets/services/standard/3.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const WintechStandard = () => {
  const data = [
    {
      id: 1,
      icon: img1,
      title: "Quality",
      des: "Our inspection equipment includes CMM, Linear Height, and Projector, thread gages, Pin...We follow the ISO 9001 quality system from the material purchase to machining to inspection.",
      link: "/",
    },
    {
      id: 2,
      icon: img2,
      title: "Certification",
      des: "Our quality management system is ISO 9001:2015 certified，certificate No. : 51822Q07569R0S. IAF, CNAS certificate and iso 13485:2016 certified, certificate No.: 64623B8060538ROS",
      link: "/",
    },
    {
      id: 3,
      icon: img3,
      title: "Quality Documents",
      des: "The First Article Inspection report, Certificate of Conformance, Material Certificate, and Finishing Test Report will be provided on your requirements.",
      link: "/",
    },
  ];
  const t = useTranslations('ServicePage');
  const keys = ['item1', 'item2', 'item3'];
  const images = [img1, img2, img3];
  return (
    <div className="py-3 md:py-5 ">
      <div className="main_container">
        <div className="">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
          {t(`Wintech.title`)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {keys?.map((item, i) => {
              return (
                <div key={i} className="bg-[#E4E5DF] p-4 md:p-6 flex flex-col items-center justify-center gap-3 md:gap-5 shadow h-full">
                  <div className="h-16 ">
                      <Image
                        width={100}
                        src={images[i]}
                        alt={t(`Wintech.DataList.${item}.title`)}
                        className="w-auto h-full"
                      />
                    </div>
                    <h4 className="capitalize font-semibold text-xl text-[#252B42]">
                    {t(`Wintech.DataList.${item}.title`)}
                    </h4>
                    <p className="text-[#000000]">{t(`Wintech.DataList.${item}.description`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WintechStandard;
