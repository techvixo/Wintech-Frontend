import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import blogDetailsImg from "../../../../../public/assets/blog-img/blog-details.png"
import Image from "next/image";
import Subscribe from "../../Contact/Subscribe/Subscribe";
import RelatedBlogs from "../RelatadeBlog/RelatedBlogs";
import GetInTouch from "../../../Shared/GetInTouch/GetInTouch";
import getSingleBlog from "../../../../lib/getSingleBlog";

const BlogDetails = async () => {
  // const blog = await getSingleBlog()
  // console.log("blog:", blog)
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
              Blog
            </Link>
            <span>
              <IoIosArrowForward />
            </span>
            <span>{"Blog single details"}</span>
          </p>
          <h2 className="text-xl md:text-2xl font-bold uppercase text-[#252B42] ">
            {"blog Single details"}
          </h2>
        </div>
      </div>
      <div className="main_container">
       <div className="py-4 md:py-7">
       <Image
          width={700}
          src={blogDetailsImg}
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
      <RelatedBlogs></RelatedBlogs>
      <Subscribe></Subscribe>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default BlogDetails;
