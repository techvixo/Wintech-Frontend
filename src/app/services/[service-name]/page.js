import FAQ from "../../../components/Pages/Home/FAQ/FAQ";
import PageMenu from "../../../components/Pages/Portfolios/PageMenu/PageMenu";
import AllServices from "../../../components/Pages/Servces/AllServices/AllServices";
import MachinesCenter from "../../../components/Pages/Servces/MachinsCenter/MachinsCenter";
import ServiceBanner from "../../../components/Pages/Servces/ServiceBanner/ServiceBanner";
import ServiceProcesses from "../../../components/Pages/Servces/ServiceProcesses/ServiceProcesses";
import WintechStandard from "../../../components/Pages/Servces/WintechStandard/WintechStandard";
import GetInTouch from "../../../components/Shared/GetInTouch/GetInTouch";
import TopGap from "../../../components/Shared/TopGap/TopGap";
import bannerImg from "../../../../public/assets/banner-img.png"
import getSpecificCategory from "../../../lib/getSpecificCategory"
export default async function Page() {
  const categoryId = "671cbaf81cab3a4651abb8f7"
  const categoryProducts = await getSpecificCategory(categoryId);
  const menus = [
    {
      id: 1,
      name: "CNC Machining Services",
      link: "/services/cnc-machining",
    },
    {
      id: 2,
      name: "Materials Machined",
      link: "/services/materials-machined",
    },
    {
      id: 3,
      name: "Surface Finishing Services",
      link: "/services/surface-finishing",
    },
  ];
  return (
    <div className="">
      <TopGap></TopGap>
      <ServiceBanner bannerBg={bannerImg} title={"Products & services"} link={"services"}></ServiceBanner>
      <PageMenu menus={menus}></PageMenu>
      <AllServices products={categoryProducts?.data}></AllServices>
      <ServiceProcesses></ServiceProcesses>
      <WintechStandard></WintechStandard>
      <MachinesCenter></MachinesCenter>
      <FAQ></FAQ>
      <GetInTouch></GetInTouch>
    </div>
  );
}
