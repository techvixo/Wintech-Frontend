import img from "../../../../../public/assets/portfolio-img/portfolio.png";
import getPortfolioImage from "../../../../lib/getPortfolioImage";
import VideoCard from "./VideoCard";

const VideoPortfolio =  () => {
  // const portfolioVideos = await getPortfolioImage()
  // console.log("portfolioImages:", portfolioImages.data)
  const data = [
    {
      title: "Project Name",
      img: img,
      link: "/",
    },
    {
      title: "Project Name",
      img: img,
      link: "/",
    },
    {
      title: "Project Name",
      img: img,
      link: "/",
    },
    {
      title: "Project Name",
      img: img,
      link: "/",
    },
    {
      title: "Project Name",
      img: img,
      link: "/",
    },
    {
      title: "Project Name",
      img: img,
      link: "/",
    },
  ];
  return (
    <div className="my-5 md:my-14">
      <div className="main_container">
        <div className="w-full md:w-full grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-y-5 md:gap-y-10">
          {data.map((portfolio, i) => {
            return (
              <VideoCard key={i} portfolio={portfolio}></VideoCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoPortfolio;
