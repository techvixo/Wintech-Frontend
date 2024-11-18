import Image from "next/image"
import { BASEURL } from "../../../../../Constant"


const PartnerCard = ({part, locale}) => {
  return (
   <div  className="px-2 mb-5">
   <div className="bg-white rounded-t-lg shadow overflow-hidden">
     <Image
     width={400}
     height={400}
       src={`${BASEURL}/${part?.image}`}
       alt={locale == "en" ? part?.name_en : part?.name_cn}
       className="w-full h-24 object-cover"
     />
     <div className="p-2 bg-[#FBFAFE]">
       <h3 className="text-xl text-center md:my-1 capitalize font-semibold text-[#1A1A1A]">
       {locale == "en" ? part?.name_en : part?.name_cn}
       </h3>
     </div>
   </div>
 </div>
  )
}

export default PartnerCard