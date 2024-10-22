import Link from "next/link";

const PageMenu = ({menus}) => {
  return (
    <div id="page_menu" className="bg-white p-1 shadow-lg">
      {menus?.map((menu, i) => {
        return (
          <Link key={i} href={menu?.link} className="py-3 text-[#252B42] md:py-5 px-6 md:px-10 inline-block border-l-2">
            {menu?.name}
          </Link>
        );
      })}
    </div>
  );
};

export default PageMenu;
