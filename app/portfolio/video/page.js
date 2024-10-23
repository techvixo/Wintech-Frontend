
import Portfolio from "@/app/Components/Pages/Portfolios/Portfilio";
import FindProducts from "@/app/Components/Shared/FindProducts/FindProducts";
import ShareBanner from "@/app/Components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/app/Components/Shared/TopGap/TopGap";
import bannerImg from "@@/banner-img.png"

export default function Page() {
  return (
    <div className="">
      <TopGap></TopGap>
      <ShareBanner bannerBg={bannerImg} title={"Portfolio"} link={"portfolio"}></ShareBanner>
      <Portfolio></Portfolio>
      Video Portfolio
      <FindProducts></FindProducts>
    </div>
  );
}
