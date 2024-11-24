import Image from "next/image";
import { getLocale } from "next-intl/server";
import notFoundImg from "../../../../../public/assets/services/product-not-found.png";
import ServiceCard from "./ServiceCard";

const AllServices = async ({ products }) => {
  const locale = await getLocale();

  return (
    <div className="my-5 md:my-14">
      <div className="main_container">
        {products?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {products?.map((product, i) => {
              return <ServiceCard key={i} locale={locale} product={product}></ServiceCard>;
            })}
          </div>
        ) : (
         <div className="flex flex-col gap-5 items-center py-5">
           <h3 className="text-xl md:text-2xl font-bold text-gray-500 text-center">Product Not Found In This Category!</h3>
           <Image src={notFoundImg} alt="not-found-image" width={200} className="w-16 md:w-24" />
         </div>
        )}
      </div>
    </div>
  );
};

export default AllServices;
