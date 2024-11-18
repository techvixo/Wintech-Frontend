import img from "../../../../../../public/assets/services/service-img.png";
import Image from "next/image";
import DetailImages from "./DetailImages";
import ProductDetails from "./ProdutcDetails";

const ServiceConfigaration = () => {
  return (
    <div className="my-5 md:my-14">
     <div className="main_container">
      <div className="top_section">
       <div className="flex flex-col md:flex-row gap-2 md:gap-10">
        <div className="detail_img w-full md:w-2/5">
        <Image
          width={600}
          src={img}
          alt={"title"}
          className="w-full"
        />
        </div>
        <div className="details_con flex flex-col md:justify-between gap-2 md:gap-5 w-full md:w-3/5">
        <h4 className="text-[#333333] text-xl md:text-2xl font-semibold my-2">CNC Machining Services</h4>
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