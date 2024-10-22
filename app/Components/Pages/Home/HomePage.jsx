import FindProducts from "../../Shared/FindProducts/FindProducts"
import GetInTouch from "../../Shared/GetInTouch/GetInTouch"
import Banner from "./Banner/Banner"
import CngMachines from "./CNGMachins/CngMachins"
import CounterSection from "./CounterSection/CounterSection"
import CustomPartsBanner from "./CustomPartsBanner/CustomPartsBanner"
import FAQ from "./FAQ/FAQ"
import FeaturedVideos from "./FeaturedVideos/FeaturedVideos"
import HowWorks from "./HowWorks/HowWorks"
import ClientTestimonial from "./Testimonial/Testimonial"
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs"

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <CngMachines></CngMachines>
      <CustomPartsBanner></CustomPartsBanner>
      <WhyChooseUs></WhyChooseUs>
      <CounterSection></CounterSection>
      <HowWorks></HowWorks>
      <FeaturedVideos></FeaturedVideos>
      <ClientTestimonial></ClientTestimonial>
      <FAQ></FAQ>
      <GetInTouch></GetInTouch>
      <FindProducts></FindProducts>
    </div>
  )
}

export default HomePage