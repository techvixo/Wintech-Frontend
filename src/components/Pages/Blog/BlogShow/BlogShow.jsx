import img from "../../../../../public/assets/blog-img/blog.png";
import BlogCard from "./BlogCard";

const BlogShow = () => {
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
    },
    {
      title: "The Medical Experts Carefully...",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img,
      link: "",
    },
  ];
  return (
    <div className="my-5 md:my-14">
      <div className="main_container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {data.map((blog, i) => {
            return <BlogCard key={i} blog={blog}></BlogCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogShow;
