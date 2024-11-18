import img from "../../../../../public/assets/portfolio-img/portfolio.png";
import PortfolioCard from "./PortfolioCard";
// import getPortfolioImage from "../../../../lib/getPortfolioImage";

const ImagePortfolio =  () => {
  // const portfolioImages = await getPortfolioImage()
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
        <div className="flex flex-col md:flex-row gap-3 md:gap-5">
          <div className="w-full md:w-1/5">
            <h4>Filters</h4>
          </div>
          <div className="w-full md:w-4/5 grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-y-5 md:gap-y-10">
            {data.map((portfolio, i) => {
              return (
                <PortfolioCard key={i} portfolio={portfolio}></PortfolioCard>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePortfolio;
