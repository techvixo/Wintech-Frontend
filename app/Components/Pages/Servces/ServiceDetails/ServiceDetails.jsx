import GetStarted from "./GetStarted/GetStarted"
import OrderingProcess from "./OrderingProcess/OrderingProcess"
import RelatedServices from "./RelatedServices/RelatedServices"
import ServiceConfigaration from "./ServiceConfigaration/ServiceConfigaration"


const ServiceDetails = () => {
  return (
    <div>
     <ServiceConfigaration></ServiceConfigaration>
     <RelatedServices></RelatedServices>
     <OrderingProcess></OrderingProcess>
     <GetStarted></GetStarted>
    </div>
  )
}

export default ServiceDetails