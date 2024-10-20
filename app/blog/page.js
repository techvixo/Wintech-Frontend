import BlogShow from "../Components/Pages/Blog/BlogShow/BlogShow";
import GetInTouch from "../Components/Shared/GetInTouch/GetInTouch";
import Subscribe from "../Components/Pages/Contact/Subscribe/Subscribe";
import ShareBanner from "../Components/Shared/ShareBanner/ShareBanner";
import TopGap from "../Components/Shared/TopGap/TopGap";
import bannerImg from "@@/banner-img.png"

export default function Page() {
  return (
    <div className="">
      <TopGap></TopGap>
      <ShareBanner bannerBg={bannerImg} title={"Win Tech Blog"} link={"blog"}></ShareBanner>
      <BlogShow></BlogShow>
      <Subscribe></Subscribe>
      <GetInTouch></GetInTouch>
    </div>
  );
}
