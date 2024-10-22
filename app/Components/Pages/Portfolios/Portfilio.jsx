import Link from "next/link";
import React from "react";
import PageMenu from "./PageMenu/PageMenu";
import ImagePortfolio from "./ImagePortfolio/ImagePortfolio";

const Portfolio = () => {
  const menus = [
    {
      id: 1,
      name: "Video",
      link: "/video",
    },
    {
      id: 1,
      name: "Portfolio",
      link: "/portfolio",
    },
  ];
  return (
    <div className="portfolio_section">
      <div className="main_container">
        <PageMenu menus={menus}></PageMenu>
      </div>
      <ImagePortfolio></ImagePortfolio>
    </div>
  );
};

export default Portfolio;
