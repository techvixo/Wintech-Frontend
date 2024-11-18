import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ blog }) => {
  return (
    <div>
      <div className="blog_img w-full">
        <Image
          width={400}
          src={blog?.img}
          alt={blog?.title}
          className="w-full"
        />
      </div>
      <div className="p-2 border border-t-0 pb-4">
        <h4 className="text-[#000000] bg-[#F5F7F8] p-2 text-md md:text-xl font-semibold capitalize">
          {blog?.title}
        </h4>
        <p className="text-sm md:text-base text-[#666666] my-2 mb-3 md:mb-5">
          {blog?.des}
        </p>
        <Link
          href={`/services/service-name/${blog?.title}`}
         className="shadow md:shadow-md font-semibold bg-gradient-to-r from-[#4177B7] to-[#86BCFC]  hover:bg-gradient-to-r hover:from-[#86BCFC] hover:to-[#4177B7] p-2 text-base md:text-lg px-3 md:px-10 rounded-md text-[#FFFFFF]  transition"
        >
         Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
