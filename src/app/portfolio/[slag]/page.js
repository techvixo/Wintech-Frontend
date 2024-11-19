import { getLocale } from "next-intl/server";
import ImagePortfolioDetails from "../../../components/Pages/Portfolios/ImagePortfolio/ImagePortfolioDetails/ImagePortfolioDetails";
import TopGap from "../../../components/Shared/TopGap/TopGap";
import getSpecificPortfolioImage from "../../../lib/getSpecificPortfolioImage";

export default async function Page({ params }) {
  const categoryId = "673c4b77fac2fb248739782d"
  const categoryProducts = await getSpecificPortfolioImage(categoryId);
  const locale = await getLocale();
  console.log("categoryId:", categoryProducts?.data)
  return (
    <div className="">
      <TopGap></TopGap>
      <ImagePortfolioDetails locale={locale} data={categoryProducts?.data}></ImagePortfolioDetails>
    </div>
  );
}
