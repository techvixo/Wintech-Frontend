import OrderingProcess from "./OrderingProcess/OrderingProcess"
import RelatedServices from "./RelatedServices/RelatedServices"
import ServiceConfigaration from "./ServiceConfigaration/ServiceConfigaration"


const ServiceDetails = () => {
  return (
    <div>
     <ServiceConfigaration></ServiceConfigaration>
     <RelatedServices></RelatedServices>
     <OrderingProcess></OrderingProcess>
    </div>
  )
}

export default ServiceDetails