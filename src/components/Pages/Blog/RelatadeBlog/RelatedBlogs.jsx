import { useTranslations } from "next-intl";
import img from "../../../../../public/assets/blog-img/blog.png";
import BlogCard from "../BlogShow/BlogCard";

const RelatedBlogs = () => {
  const data = [
    {
      title: "The Medical Experts Carefully...",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img,
      link: "",
    },
    {
      title: "The Medical Experts Carefully...",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img,
      link: "",
    },
    {
      title: "The Medical Experts Carefully...",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img,
      link: "",
    }
  ];
  const t = useTranslations('Blog');
  return (
    <div className="my-5 md:my-14">
      <div className="main_container">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
      {t(`BlogDetail.title`)}
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {data.map((blog, i) => {
            return <BlogCard key={i} blog={blog}></BlogCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogs;
