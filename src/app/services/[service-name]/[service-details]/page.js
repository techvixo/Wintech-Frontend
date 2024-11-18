import ServiceBanner from "../../../../components/Pages/Servces/ServiceBanner/ServiceBanner";
import ServiceDetails from "../../../../components/Pages/Servces/ServiceDetails/ServiceDetails";
import TopGap from "../../../../components/Shared/TopGap/TopGap";
import bannerImg from "../../../../../public/assets/banner-img.png"
import getSpecificProduct from "../../../../lib/getSpecificProduct"
export default async function Page() {
  const productId = ""
  // const product = await getSpecificProduct(productId)
  // console.log("productDetails:", product)
  return (
    <div className="">
      <TopGap></TopGap>
      <ServiceBanner bannerBg={bannerImg} title={"Products & services"} link={"services"}></ServiceBanner>
      <ServiceDetails></ServiceDetails>
    </div>
  );
}
