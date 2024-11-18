import ContactBox from "../../components/Pages/Contact/ContactUsBox/ContactBox";
import MapLocation from "../../components/Pages/Contact/MapLocation/MapLocation";
import Subscribe from "../../components/Pages/Contact/Subscribe/Subscribe";
import ShareBanner from "../../components/Shared/ShareBanner/ShareBanner";
import TopGap from "../../components/Shared/TopGap/TopGap";
import bannerImg from "../../../public/assets/banner-img.png"
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations('Contact');
  return (
    <div className="">
      <TopGap></TopGap>
      <ShareBanner bannerBg={bannerImg} title= {t(`title`)} link={"contact"}></ShareBanner>
      <ContactBox></ContactBox>
      <MapLocation></MapLocation>
      <Subscribe></Subscribe>
    </div>
  );
}
