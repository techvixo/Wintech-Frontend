import Image from "next/image"


const MachineCenterCard = ({part}) => {
  return (
   <div  className="px-2">
   <div className="">
     <Image
     width={400}
       src={part.imgUrl}
       alt={part.name}
       className="w-full"
     />
   </div>
 </div>
  )
}

export default MachineCenterCard