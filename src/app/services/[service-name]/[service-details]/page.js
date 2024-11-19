import ServiceBanner from "../../../../components/Pages/Servces/ServiceBanner/ServiceBanner";
import ServiceDetails from "../../../../components/Pages/Servces/ServiceDetails/ServiceDetails";
import TopGap from "../../../../components/Shared/TopGap/TopGap";
import bannerImg from "../../../../../public/assets/banner-img.png"
import getSpecificProduct from "../../../../lib/getSpecificProduct"
export default async function Page() {
  const productId = "673cc31e7f4e54dc479bd6d2"
  const product = await getSpecificProduct(productId)
  // console.log("productDetails:", product?.data)
  return (
    <div className="">
      <TopGap></TopGap>
      <ServiceBanner bannerBg={bannerImg} title={"Products & services"} link={"services"}></ServiceBanner>
      <ServiceDetails product={product?.data}></ServiceDetails>
    </div>
  );
}
