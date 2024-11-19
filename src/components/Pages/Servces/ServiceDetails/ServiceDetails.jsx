import { getLocale } from "next-intl/server"
import GetStarted from "./GetStarted/GetStarted"
import OrderingProcess from "./OrderingProcess/OrderingProcess"
import RelatedServices from "./RelatedServices/RelatedServices"
import ServiceConfigaration from "./ServiceConfigaration/ServiceConfigaration"


const ServiceDetails = async ({product}) => {
  const locale = await getLocale();
  return (
    <div>
     <ServiceConfigaration locale={locale} product={product}></ServiceConfigaration>
     <RelatedServices></RelatedServices>
     <OrderingProcess></OrderingProcess>
     <GetStarted></GetStarted>
    </div>
  )
}

export default ServiceDetails