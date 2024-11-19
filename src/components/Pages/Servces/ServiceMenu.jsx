import MenuLink from "../../Shared/Navbar/MenuLink";
import getAllCategories from "../../../lib/getAllCategories";
import { getLocale } from "next-intl/server";

const ServiceMenu = async () => {
    const allCategories = await getAllCategories()
    const locale = await getLocale();
    // console.log("allCategories:", allCategories.data)
    return (
        <>
            {
                allCategories?.data?.length > 0 &&
                <div id="page_menu" className="main_container bg-white p-1 shadow-lg">
                    {allCategories?.data?.map((menu, i) => {
                        return (
                            <MenuLink
                                key={i}
                                href={`/services/${menu?._id}`}
                                activeClassName="text-secondary font-semibold"
                                exact={menu?.link === "/"}
                                className="py-3 text-[#252B42] md:py-5 px-6 md:px-10 inline-block border-l-2"
                            >
                                {locale == "en" ? menu?.name_en?.slice(0, 25) : menu?.name_cn?.slice(0, 25)}
                            </MenuLink>
                        );
                    })}
                </div>
            }
        </>
    );
};

export default ServiceMenu;
