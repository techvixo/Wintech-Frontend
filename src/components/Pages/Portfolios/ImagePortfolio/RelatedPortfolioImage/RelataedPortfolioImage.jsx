import img from "../../../../../../public/assets/portfolio-img/portfolio.png";
import PortfolioCard from "../PortfolioCard";

const RelatedImagePortfolio = () => {
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
  ];
  return (
    <div className="my-5 md:my-14">
      <div className="main_container">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
      Other Portfolio
          </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-y-5 md:gap-y-10">
          {data.map((portfolio, i) => {
            return (
              <PortfolioCard key={i} portfolio={portfolio}></PortfolioCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedImagePortfolio;
