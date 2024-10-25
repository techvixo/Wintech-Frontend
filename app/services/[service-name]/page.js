import FAQ from "@/app/Components/Pages/Home/FAQ/FAQ";
import PageMenu from "@/app/Components/Pages/Portfolios/PageMenu/PageMenu";
import AllServices from "@/app/Components/Pages/Servces/AllServices/AllServices";
import MachinesCenter from "@/app/Components/Pages/Servces/MachinsCenter/MachinsCenter";
import ServiceBanner from "@/app/Components/Pages/Servces/ServiceBanner/ServiceBanner";
import ServiceProcesses from "@/app/Components/Pages/Servces/ServiceProcesses/ServiceProcesses";
import WintechStandard from "@/app/Components/Pages/Servces/WintechStandard/WintechStandard";
import GetInTouch from "@/app/Components/Shared/GetInTouch/GetInTouch";
import TopGap from "@/app/Components/Shared/TopGap/TopGap";
import bannerImg from "@@/banner-img.png"
export default function Page() {
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
      <AllServices></AllServices>
      <ServiceProcesses></ServiceProcesses>
      <WintechStandard></WintechStandard>
      <MachinesCenter></MachinesCenter>
      <FAQ></FAQ>
      <GetInTouch></GetInTouch>
    </div>
  );
}
