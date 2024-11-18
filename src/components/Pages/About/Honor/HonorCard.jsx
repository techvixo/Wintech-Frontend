import Image from "next/image"


const PartnerCard = ({part}) => {
  return (
   <div  className="px-2 mb-5">
   <div className="bg-white rounded-t-lg shadow overflow-hidden">
     <Image
     width={400}
       src={part.imgUrl}
       alt={part.name}
       className="w-full h-24 object-cover"
     />
     {/* <div className="p-2 bg-[#FBFAFE]">
       <h3 className="text-xl text-center md:my-1 capitalize font-semibold text-[#1A1A1A]">{"Partner Name"}</h3>
     </div> */}
   </div>
 </div>
  )
}

export default PartnerCard