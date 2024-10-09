import Image from "next/image"


const MachineCard = ({part}) => {
  return (
   <div  className="px-2 mb-5">
   <div className="bg-white rounded-t-lg shadow overflow-hidden">
     <Image
     width={400}
       src={part.imgUrl}
       alt={part.name}
       className="w-full h-64 object-cover"
     />
     <div className="p-4 bg-[#FBFAFE]">
       <h3 className="text-xl md:my-2 capitalize font-semibold text-[#1A1A1A]">{part.name}</h3>
     </div>
   </div>
 </div>
  )
}

export default MachineCard