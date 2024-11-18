import Certificates from "../../components/Pages/About/Certificates/Certificates";
import Facilities from "../../components/Pages/About/Facilities/Facilities";
import OurTeam from "../../components/Pages/About/OutTeam/OurTeam";
import WeDo from "../../components/Pages/About/WeDo/WeDo";
import WhoWeAre from "../../components/Pages/About/WhoWeAre/WhoWeAre";
import AboutBanner from "../../components/Pages/About/AboutBanner/AboutBanner";
import ClientTestimonial from "../../components/Pages/Home/Testimonial/Testimonial";
import PageMenu from "../../components/Pages/Portfolios/PageMenu/PageMenu";
import AboutMenuTab from "../../components/Pages/About/AboutMenuTab";
import FindProducts from "../../components/Shared/FindProducts/FindProducts";
import GetInTouch from "../../components/Shared/GetInTouch/GetInTouch";
import TopGap from "../../components/Shared/TopGap/TopGap";
import getHomePageData from "../../lib/getHomePageData";


export default async function Page() {
  const certificatesData = await getHomePageData()

// console.log("certificatesData:", certificatesData);
  return (
    <div className="">
      <TopGap></TopGap>
      <AboutBanner></AboutBanner>
      <AboutMenuTab></AboutMenuTab>
      <WeDo></WeDo>
      <Facilities></Facilities>
      <OurTeam></OurTeam>
      <Certificates certificatesData={certificatesData?.data}></Certificates>
      <ClientTestimonial></ClientTestimonial>
      <GetInTouch></GetInTouch>
      <FindProducts></FindProducts>
    </div>
  );
}
