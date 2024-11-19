import img from "../../../../../../public/assets/services/service-img.png";
import Image from "next/image";
import DetailImages from "./DetailImages";
import ProductDetails from "./ProdutcDetails";
import { BASEURL } from "../../../../../../Constant";

const ServiceConfigaration = ({product, locale}) => {
  console.log(product);
  return (
    <div className="my-5 md:my-14">
     <div className="main_container">
      <div className="top_section">
       <div className="flex flex-col md:flex-row gap-2 md:gap-10">
        <div className="detail_img w-full md:w-2/5">
        <Image
          width={600}
          height={400}
          src={`${BASEURL}/${product?.images[0]}`}
          alt={locale == "en" ? product?.title_en : product?.title_en}
          className="w-full"
        />
        </div>
        <div className="details_con flex flex-col md:justify-between gap-2 md:gap-5 w-full md:w-3/5">
        <h4 className="text-[#333333] text-xl md:text-2xl font-semibold my-2">
          {/* CNC Machining Services */}
          {locale == "en" ? product?.title_en : product?.title_cn}
          </h4>
        <p className="text-sm md:text-base">This machine is fully automatic to produce the outside earloop face mask, including 1 set of mask body machine and 1 set of earloop welding machine.The process is from raw material feeding,earloop welding＆nose wire welding to finished product</p>
        <DetailImages></DetailImages>
        </div>
       </div>
      </div>
      <ProductDetails></ProductDetails>
     </div>
    </div>
  )
}

export default ServiceConfigaration