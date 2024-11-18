import Image from "next/image"
import Link from "next/link"


const BlogCard = ({blog}) => {
  return (
    <div>
     <div className="blog_img w-full pb-2">
     <Image
     width={400}
       src={blog?.img}
       alt={blog?.title}
       className="w-full rounded-md"
     />
     </div>
     <h4 className="text-[#252B42] my-2 text-lg md:text-2xl font-semibold capitalize">{blog?.title}</h4>
     <p className="text-sm md:text-base text-[#606060] my-2 mb-4 md:mb-7">{blog?.des}</p>
     <Link href={`/blog/${blog?.title}`} className="text-[#252B42] hover:text-white hover:bg-primary transition text-sm p-2 md:p-3 px-5 md:px-7 cursor-pointer rounded-full font-semibold blog_border ">READ MORE</Link>
    </div>
  )
}

export default BlogCard