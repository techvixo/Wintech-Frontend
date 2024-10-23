import Certificates from "../Components/Pages/About/Certificates/Certificates";
import Facilities from "../Components/Pages/About/Facilities/Facilities";
import OurTeam from "../Components/Pages/About/OutTeam/OurTeam";
import WeDo from "../Components/Pages/About/WeDo/WeDo";
import WhoWeAre from "../Components/Pages/About/WhoWeAre/WhoWeAre";
import ClientTestimonial from "../Components/Pages/Home/Testimonial/Testimonial";
import PageMenu from "../Components/Pages/Portfolios/PageMenu/PageMenu";
import FindProducts from "../Components/Shared/FindProducts/FindProducts";
import GetInTouch from "../Components/Shared/GetInTouch/GetInTouch";
import ShareBanner from "../Components/Shared/ShareBanner/ShareBanner";
import TopGap from "../Components/Shared/TopGap/TopGap";
import bannerImg from "@@/banner-img.png"

export default function Page() {
  const menus = [
    {
      id: 1,
      name: "Company profile",
      link: "/about/company",
    },
    {
      id: 1,
      name: "Partner",
      link: "/about/partner",
    },
    {
      id: 1,
      name: "Honor",
      link: "/about/honor",
    },
  ];
  return (
    <div className="">
      <TopGap></TopGap>
      <ShareBanner bannerBg={bannerImg} title={"About Us"} link={"about"}></ShareBanner>
      <PageMenu menus={menus}></PageMenu>
      <WhoWeAre></WhoWeAre>
      <WeDo></WeDo>
      <Facilities></Facilities>
      <OurTeam></OurTeam>
      <Certificates></Certificates>
      <ClientTestimonial></ClientTestimonial>
      <GetInTouch></GetInTouch>
      <FindProducts></FindProducts>
    </div>
  );
}
