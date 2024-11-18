import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import portfolioDetailsImg from "../../../../../../public/assets/portfolio-img/portfolio-detail.png"
import FindProducts from "../../../../../components/Shared/FindProducts/FindProducts";
import RelatedImagePortfolio from "../RelatedPortfolioImage/RelataedPortfolioImage";

const ImagePortfolioDetails = () => {
  return (
    <div>
      <div className="blog_detail_top bg-[#252B421A] py-3 md:py-5">
        <div className="main_container">
          <p className="flex items-center gap-2 md:font-semibold text-sm">
            <span>Home</span>
            <span>
              <IoIosArrowForward />
            </span>
            <Link className="capitalize" href={"/blog"}>
            portfolio
            </Link>
            <span>
              <IoIosArrowForward />
            </span>
            <span>{"Portfolio single details"}</span>
          </p>
          <h2 className="text-xl md:text-2xl font-bold uppercase text-[#252B42] ">
            {"Portfolio single details"}
          </h2>
        </div>
      </div>
      <div className="main_container">
       <div className="py-4 md:py-7">
       <Image
          width={700}
          src={portfolioDetailsImg}
          alt={"Blog detail image here.."}
          className="w-full"
        />
       </div>
      <div className="blog_para">
      <p className="text-sm md:text-base text-[#606060] my-3 md:my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque leo nec aenean maecenas odio tempus id. Mauris, elementum est egestas tincidunt pellentesque. Tempus massa rhoncus velit nec. Lorem purus est facilisis quam lorem amet, nunc lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque leo nec aenean maecenas odio tempus id. Mauris, elementum est egestas tincidunt pellentesque. Tempus massa rhoncus velit nec. Lorem purus est facilisis quam lorem amet, nunc lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque leo nec aenean maecenas odio tempus id. Mauris, elementum est egestas tincidunt pellentesque. Tempus massa rhoncus velit nec. Lorem purus est facilisis quam lorem amet, nunc lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque leo nec aenean maecenas odio tempus id. Mauris, elementum est egestas tincidunt pellentesque. Tempus massa rhoncus velit nec. Lorem purus est facilisis quam lorem amet, nunc lectus.</p>
      <p className="text-sm md:text-base text-[#606060] my-3 md:my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque leo nec aenean maecenas odio tempus id. Mauris, elementum est egestas tincidunt pellentesque. Tempus massa rhoncus velit nec. Lorem purus est facilisis quam lorem amet, nunc lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque leo nec aenean maecenas odio tempus id. Mauris, elementum est egestas tincidunt pellentesque. Tempus massa rhoncus velit nec. Lorem purus est facilisis quam lorem amet, nunc lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque leo nec aenean maecenas odio tempus id. Mauris, elementum est egestas tincidunt pellentesque. Tempus massa rhoncus velit nec. Lorem purus est facilisis quam lorem amet, nunc lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque leo nec aenean maecenas odio tempus id. Mauris, elementum est egestas tincidunt pellentesque. Tempus massa rhoncus velit nec. Lorem purus est facilisis quam lorem amet, nunc lectus.</p>
      <p className="text-sm md:text-base text-[#606060] my-3 md:my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque leo nec aenean maecenas odio tempus id. Mauris, elementum est egestas tincidunt pellentesque. Tempus massa rhoncus velit nec. Lorem purus est facilisis quam lorem amet, nunc lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque leo nec aenean maecenas odio tempus id. Mauris, elementum est egestas tincidunt pellentesque. Tempus massa rhoncus velit nec. Lorem purus est facilisis quam lorem amet, nunc lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque leo nec aenean maecenas odio tempus id. Mauris, elementum est egestas tincidunt pellentesque. Tempus massa rhoncus velit nec. Lorem purus est facilisis quam lorem amet, nunc lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque leo nec aenean maecenas odio tempus id. Mauris, elementum est egestas tincidunt pellentesque. Tempus massa rhoncus velit nec. Lorem purus est facilisis quam lorem amet, nunc lectus.</p>
      </div>
      </div>
      <RelatedImagePortfolio></RelatedImagePortfolio>
      <FindProducts></FindProducts>
    </div>
  );
};

export default ImagePortfolioDetails;
