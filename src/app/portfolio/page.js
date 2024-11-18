import Portfolio from "../../components/Pages/Portfolios/Portfilio";
import FindProducts from "../../components/Shared/FindProducts/FindProducts";
import ShareBanner from "../../components/Shared/ShareBanner/ShareBanner";
import TopGap from "../../components/Shared/TopGap/TopGap";
import bannerImg from "../../../public/assets/banner-img.png"
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations('Portfolio');
  return (
    <div className="">
      <TopGap></TopGap>
      <ShareBanner bannerBg={bannerImg} title={t(`title`)} link={"portfolio"}></ShareBanner>
      <Portfolio></Portfolio>
      <FindProducts></FindProducts>
    </div>
  );
}
