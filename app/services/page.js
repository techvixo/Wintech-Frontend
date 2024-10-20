import FAQ from "../Components/Pages/Home/FAQ/FAQ";
import ServiceBanner from "../Components/Pages/Servces/ServiceBanner/ServiceBanner";
import GetInTouch from "../Components/Shared/GetInTouch/GetInTouch";
import TopGap from "../Components/Shared/TopGap/TopGap";
import bannerImg from "@@/banner-img.png"
export default function Page() {
  return (
    <div className="">
      <TopGap></TopGap>
      <ServiceBanner bannerBg={bannerImg} title={"Products & services"} link={"services"}></ServiceBanner>

      <FAQ></FAQ>
      <GetInTouch></GetInTouch>
    </div>
  );
}
