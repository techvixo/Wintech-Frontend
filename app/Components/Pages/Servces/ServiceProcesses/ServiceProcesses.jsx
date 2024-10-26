"use client";
import img1 from "@@/services/processed/1.png";
import img2 from "@@/services/processed/2.png";
import img3 from "@@/services/processed/3.png";
import img4 from "@@/services/processed/4.png";
import Image from "next/image";

const sections = [
  {
    title: "Processes",
    description:
      "We offer expert CNC prototyping services, precision CNC machining services, and plastic CNC prototyping. Our highly skilled workforce operates state-of-the-art machines.",
    list: [
      "CNC Milling",
      "CNC Machining",
      "CNC Turning",
      "CNC Router",
      "Prototype CNC",
      "EDM",
    ],
    img: img1,
  },
  {
    title: "Equipment",
    description:
      "We can mill complex shapes from the toughest materials using our advanced equipment, ensuring speed, precision, and quality.",
    list: [
      "3 Axis Machining",
      "4 Axis Machining",
      '5 Axis Machining (up to 110" x 72" x 40")',
      "7 Axis Lathe",
      "5 Axis Gun Drill",
    ],
    img: img2,
  },
  {
    title: "Materials",
    description:
      "Choose from a wide range of CNC machining services and materials to get your project done quickly and efficiently.",
    list: [
      "Aluminum Billet",
      "Aluminum Casting",
      "Brass/Bronze",
      "Zinc",
      "Copper",
      "Titanium",
    ],
    img: img3,
  },
  {
    title: "Industries Served",
    description:
      "Our CNC machining services can be used for a variety of industries and applications. Trust us for your prototype CNC machining needs.",
    list: [
      "Automotive (Autonomous)",
      "Aerospace",
      "Defense",
      "Medical",
      "Consumer Products",
      "Industrial",
    ],
    img: img4,
  },
];

const ServiceProcesses = () => {
  return (
    <div className="main_container py-5">
      <div className="flex flex-col gap-3 md:gap-5">
        {sections.map((section, index) => {
          console.log(index % 2);
          return (
            <div
              key={index}
              className={`flex flex-col gap-3 md:gap-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  width={600}
                  src={section.img}
                  alt={section.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Text */}
              <div className="w-full text-[#000000] p-0 md:px-7 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold my-2 md:my-3 text-secondary">
                  {section.title}
                </h2>
                <ul className="flex flex-col gap-1 md:gap-2 ml-2 md:ml-4">
                  {section.list.map((item, idx) => (
                    <li className="text-sm md:text-base" key={idx}>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="my-2 md:my-4">{section.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceProcesses;
