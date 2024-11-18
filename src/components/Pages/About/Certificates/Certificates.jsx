import Link from "next/link";
// Import your images
import img from "../../../../../public/assets/about-img/certificate.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Certificates = ({certificatesData}) => {
  const data = [
    {
      id: 1,
      image: img,
      title: "manufacturer",
      link: "/",
    },
    {
      id: 2,
      image: img,
      title: "Quality Guaranteed",
      link: "/",
    },
    {
      id: 3,
      image: img,
      title: "Short Turnaround Lead Time",
      link: "/",
    },
    {
      id: 4,
      image: img,
      title: "Cost Effective",
      link: "/",
    },
    {
      id: 4,
      image: img,
      title: "Cost Effective",
      link: "/",
    },
  ];
  const t = useTranslations('AboutPage');
  return (
    <div className="py-3 md:py-5">
      <div className="">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
      {t(`Certification.title`)}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 pt-2">
            {data.map((item, i) => {
              return (
                <div key={i} className="">
                  <Image
                    width={500}
                    src={item.image}
                    alt={item.title}
                    className="w-full"
                  />
                <div className="bg-[#252B42] p-2 md:p-3">
                <h4 className="uppercase text-sm text-white">
                Certificate:
                  </h4>
                <h4 className="capitalize text-sm font-semibold  text-white">
                Certificate Name
                  </h4>
                </div>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
};

export default Certificates;
