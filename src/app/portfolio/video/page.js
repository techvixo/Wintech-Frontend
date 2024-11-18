
import VideoPortfolio from "../../../components/Pages/Portfolios/VideoPortfolio/VideoPortfolio";
import FindProducts from "../../../components/Shared/FindProducts/FindProducts";
import ShareBanner from "../../../components/Shared/ShareBanner/ShareBanner";
import TopGap from "../../../components/Shared/TopGap/TopGap";
import bannerImg from "../../../../public/assets/banner-img.png"
import PageMenu from "../../../components/Pages/Portfolios/PageMenu/PageMenu";

export default function Page() {
  const menus = [
    {
      id: 1,
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      id: 1,
      name: "Video",
      link: "/portfolio/video",
    }
  ];
  return (
    <div className="">
      <TopGap></TopGap>
      <ShareBanner bannerBg={bannerImg} title={"Portfolio"} link={"portfolio"}></ShareBanner>
      <PageMenu menus={menus}></PageMenu>
      <VideoPortfolio></VideoPortfolio>
      <FindProducts></FindProducts>
    </div>
  );
}
