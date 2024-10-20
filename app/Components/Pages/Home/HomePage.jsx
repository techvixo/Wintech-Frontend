import FindProducts from "../../Shared/FindProducts/FindProducts"
import GetInTouch from "../../Shared/GetInTouch/GetInTouch"
import Banner from "./Banner/Banner"
import CngMachines from "./CNGMachins/CngMachins"
import CounterSection from "./CounterSection/CounterSection"
import CustomPartsBanner from "./CustomPartsBanner/CustomPartsBanner"
import FAQ from "./FAQ/FAQ"
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs"

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <CngMachines></CngMachines>
      <CustomPartsBanner></CustomPartsBanner>
      <WhyChooseUs></WhyChooseUs>
      <CounterSection></CounterSection>
      <FAQ></FAQ>
      <GetInTouch></GetInTouch>
      <FindProducts></FindProducts>
    </div>
  )
}

export default HomePage