import Link from "next/link";

const FindProducts = () => {
  return (
   <div className=" py-3 md:py-8">
     <div className="main_container">
      <div id="find_product" className="py-7 md:py-24 rounded shadow md:rounded-2xl">
        <div className="flex flex-col items-center justify-center gap-2 md:gap-5 p-4 md:p-8 rounded shadow md:rounded-2xl w-11/12 md:w-1/2 mx-auto p bg-white">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#08110C]">
          Ready to find your eco-friendly Product? 
          </h2>
          <p className="text-sm md:text-base text-[#313131] text-center">We have homes in 20+ cities across the country to choose from!</p>
          <Link href="/services">
            <button className=" font-semibold bg-gradient-to-r from-[#4177B7] to-[#86BCFC]  hover:bg-gradient-to-r hover:from-[#86BCFC] hover:to-[#4177B7] p-2 text-base md:text-lg px-3 md:px-10 rounded-md text-[#FFFFFF]  transition">
            Browse Product
            </button>
          </Link>
        </div>
      </div>
    </div>
   </div>
  );
};

export default FindProducts;
