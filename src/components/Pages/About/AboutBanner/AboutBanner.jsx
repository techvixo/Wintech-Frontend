import { useTranslations } from "next-intl";
import ShareBanner from "../../../Shared/ShareBanner/ShareBanner";
import bannerImg from "../../../../../public/assets/banner-img.png";

const AboutBanner = () => {
    const t = useTranslations('AboutPage');
    
  return (
    <div>
        <ShareBanner bannerBg={bannerImg} title={t(`title`)} link={"about"}></ShareBanner>
    </div>
  )
}

export default AboutBanner