import Image from "next/image";
import getSpecificCategory from "../../../../../lib/getSpecificCategory";
import ServiceCard from "../../AllServices/ServiceCard";
import notFoundImg from "../../../../../../public/assets/services/product-not-found.png";

const RelatedServices = async ({ product, locale }) => {
  const relatedProducts = await getSpecificCategory(product?.category?.categoryId);
  const isProduct = product?._id;

  // Filter out the current product from related products
  const filteredProducts = relatedProducts?.data?.products?.filter(
    (relatedProduct) => relatedProduct?._id !== isProduct
  );

  return (
    <div className="my-5 md:my-14">
      <div className="main_container">
        {filteredProducts?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {filteredProducts?.map((product, i) => (
              <ServiceCard key={i} locale={locale} product={product}></ServiceCard>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-5 items-center py-5">
            <h3 className="text-xl md:text-2xl font-bold text-gray-500 text-center">
              Related Product Not Found In This Category!
            </h3>
            <Image
              src={notFoundImg}
              alt="not-found-image"
              width={200}
              className="w-16 md:w-24"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RelatedServices;
