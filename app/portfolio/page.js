import Portfolio from "../Components/Pages/Portfolios/Portfilio";
import FindProducts from "../Components/Shared/FindProducts/FindProducts";
import ShareBanner from "../Components/Shared/ShareBanner/ShareBanner";
import TopGap from "../Components/Shared/TopGap/TopGap";
import bannerImg from "@@/banner-img.png"

export default function Page() {
  return (
    <div className="">
      <TopGap></TopGap>
      <ShareBanner bannerBg={bannerImg} title={"Portfolio"} link={"portfolio"}></ShareBanner>
      <Portfolio></Portfolio>
      
      <FindProducts></FindProducts>
    </div>
  );
}
