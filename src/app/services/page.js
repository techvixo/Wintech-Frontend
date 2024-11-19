import FAQ from "../../components/Pages/Home/FAQ/FAQ";
import PageMenu from "../../components/Pages/Portfolios/PageMenu/PageMenu";
import ServiceMenu from "../../components/Pages/Servces/ServiceMenu";
import AllServices from "../../components/Pages/Servces/AllServices/AllServices";
import MachinesCenter from "../../components/Pages/Servces/MachinsCenter/MachinsCenter";
import ServiceBannerWrapper from "../../components/Pages/Servces/ServiceBanner/ServiceBannerWraper";
import ServiceProcesses from "../../components/Pages/Servces/ServiceProcesses/ServiceProcesses";
import WintechStandard from "../../components/Pages/Servces/WintechStandard/WintechStandard";
import GetInTouch from "../../components/Shared/GetInTouch/GetInTouch";
import TopGap from "../../components/Shared/TopGap/TopGap";
import getAllCategories from "../../lib/getAllCategories"
import getProducts from "../../lib/getProducts"

export default async function Page() {
  // const allCategories = await getAllCategories()
  const allProducts = await getProducts()
  // console.log("allCategories:", allProducts.data)
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
      <ServiceBannerWrapper></ServiceBannerWrapper>
      {/* <PageMenu menus={menus}></PageMenu> */}
      <ServiceMenu></ServiceMenu>
      <AllServices products={allProducts?.data}></AllServices>
      <ServiceProcesses></ServiceProcesses>
      <WintechStandard></WintechStandard>
      <MachinesCenter></MachinesCenter>
      <FAQ></FAQ>
      <GetInTouch></GetInTouch>
    </div>
  );
}
