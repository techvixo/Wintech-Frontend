import img from "../../../../../public/assets/services/service-img.png";
import ServiceCard from "./ServiceCard";

const AllServices = ({products}) => {
  const data = [
    {
      title: "CNC Turning",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img,
      link: "",
    },
    {
      title: "CNC Turning",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img,
      link: "",
    },
    {
      title: "CNC Turning",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img,
      link: "",
    },
    {
      title: "CNC Turning",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img,
      link: "",
    }
  ];
  
  // console.log("Products::", products)
  return (
    <div className="my-5 md:my-14">
      <div className="main_container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {data.map((blog, i) => {
            return <ServiceCard key={i} blog={blog}></ServiceCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
