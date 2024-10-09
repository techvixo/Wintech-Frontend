import Link from "next/link"


const CustomPartsBanner = () => {
  return (
    <div id="custom_part" className="py-10 md:py-24">
     <div className="main_container">
      <div className="flex flex-col items-center justify-center gap-3 ">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-white my-4 md:my-7">
      Custom Parts Make Easy
      </h2>
      <Link href={"/services"}>
            <button
              className=" font-semibold bg-gradient-to-r from-[#4177B7] to-[#86BCFC]  hover:bg-gradient-to-r hover:from-[#86BCFC] hover:to-[#4177B7] p-2 text-base md:text-lg px-3 md:px-10 rounded-md text-[#FFFFFF]  transition"
            >
             EXPLORE NOW
            </button>
          </Link>
      </div>
     </div>
    </div>
  )
}

export default CustomPartsBanner