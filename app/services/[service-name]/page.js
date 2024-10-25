import ServiceBanner from "@/app/Components/Pages/Servces/ServiceBanner/ServiceBanner";
import TopGap from "@/app/Components/Shared/TopGap/TopGap";
import bannerImg from "@@/banner-img.png"
export default function Page() {
 
  return (
    <div className="">
      <TopGap></TopGap>
      <ServiceBanner bannerBg={bannerImg} title={"Products & services"} link={"services"}></ServiceBanner>

    </div>
  );
}
