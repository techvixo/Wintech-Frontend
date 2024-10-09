import Banner from "./Banner/Banner"
import CngMachines from "./CNGMachins/CngMachins"
import CustomPartsBanner from "./CustomPartsBanner/CustomPartsBanner"
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs"

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <CngMachines></CngMachines>
      <CustomPartsBanner></CustomPartsBanner>
      <WhyChooseUs></WhyChooseUs>
    </div>
  )
}

export default HomePage