import ContactBox from "../Components/Pages/Contact/ContactUsBox/ContactBox";
import MapLocation from "../Components/Pages/Contact/MapLocation/MapLocation";
import Subscribe from "../Components/Pages/Contact/Subscribe/Subscribe";
import ShareBanner from "../Components/Shared/ShareBanner/ShareBanner";
import TopGap from "../Components/Shared/TopGap/TopGap";
import bannerImg from "@@/banner-img.png"
export default function Page() {
  return (
    <div className="">
      <TopGap></TopGap>
      <ShareBanner bannerBg={bannerImg} title={"Contact Us"} link={"contact"}></ShareBanner>
      <ContactBox></ContactBox>
      <MapLocation></MapLocation>
      <Subscribe></Subscribe>
    </div>
  );
}
