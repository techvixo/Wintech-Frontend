import ShareBanner from "../Components/Shared/ShareBanner/ShareBanner";
import TopGap from "../Components/Shared/TopGap/TopGap";
import bannerImg from "@@/banner-img.png"

export default function Page() {
  return (
    <div className="">
      <TopGap></TopGap>
      <ShareBanner bannerBg={bannerImg} title={"About Us"} link={"about"}></ShareBanner>
      About
    </div>
  );
}
