import Image from "next/image";
import Link from "next/link";
import { BASEURL } from "../../../../../Constant";


const ServiceCard = ({ product, locale }) => {
  // Function to convert a string into a URL-friendly slug
const generateSlug = (text) => {
  return text
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, ""); // Remove all non-word characters
};
  const title = locale === "en" ? product?.title_en : product?.title_cn;
  const slug = generateSlug(title); // Generate the slug for the title
  const link = `/services/${slug}/${product?._id}`;
 
  return (
    <div className="w-full h-full border border-t-0">
      <div className="product_img w-full">
        <Image
          width={500}
          height={400}
          src={`${BASEURL}/${product?.images[0]}`}
          alt={locale == "en" ? product?.title_en : product?.title_en}
          className="w-full h-48 md:h-56 object-cover"
        />
      </div>
      <div className="p-2  pb-4">
        <h4 className="text-[#000000] bg-[#F5F7F8] p-2 text-md md:text-xl font-semibold capitalize">
          {locale == "en" ? product?.title_en : product?.title_cn}
        </h4>
        <p className="text-sm md:text-base text-[#666666] my-2 mb-3 md:mb-5">
          {locale == "en"
            ? product?.description_en?.slice(0, 30)
            : product?.description_cn?.slice(0, 30)}
        </p>
        <Link
          href={link}
          className="shadow md:shadow-md font-semibold bg-gradient-to-r from-[#4177B7] to-[#86BCFC]  hover:bg-gradient-to-r hover:from-[#86BCFC] hover:to-[#4177B7] p-2 text-base md:text-lg px-3 md:px-10 rounded-md text-[#FFFFFF]  transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
