"use client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";
import logo from "../../../../public/assets/logo/logo.png";
import mainLogo from "../../../../public/assets/logo/main-logo.png";
import secondLogo from "../../../../public/assets/logo/second-logo.png";
import { BsWhatsapp } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { BsTelephonePlus } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import SubMenuBar from "./SubMenuBar";
import SubMenuForMobile from "./SubMenuForMobile";
import LocaleSwitcher from "../LanguageSwitcher/LocaleSwitcher";
import { useTranslations } from "next-intl";
import MenuLink from "./MenuLink";

const Navbar = ({allCategories, local}) => {
  const [navToggle, setNavToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isRoot, setIsRoot] = useState(true);
  const [openSubMenus, setOpenSubMenus] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsRoot(pathname === "/");
  }, [pathname]);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSubMenu = () => {
    setOpenSubMenus(!openSubMenus);
  };
  const navData = [
    {
      path: "/",
      title: "Home",
      subManu: [],
    },
    {
      path: "/services",
      title: "Services",
      subManu: [],
    },
    {
      path: "/about",
      title: "ABOUT US",
      subManu: [],
    },
    {
      path: "/portfolio",
      title: "Portfolio",
      subManu: [],
    },
    {
      path: "/blog",
      title: "Blog",
      subManu: [],
    },
    {
      path: "/contact",
      title: "Contact",
      subManu: [],
    },
  ];
  const t = useTranslations('AppLayout');
  const keys = ['menu1', 'menu2', 'menu3', 'menu4', 'menu5', 'menu6'];

  return (
    <nav
      className={`z-40 w-full fixed left-0 right-0 py-2 lg:py-0  ${isSticky
        ? "top-0 bg-white nav_shadow"
        : `top-0 bg-white ${isRoot && "md:bg-[#00000000]"} navber_border`
        }`}
    >
      <div className="hidden md:block">
        <div className="w-full grid grid-cols-2 py-2 md:py-3 px-10 bg-[#252B42]">
          <div className="flex items-center justify-start gap-8 w-full">
            <a
              target="blank"
              href="https://wa.me/+8801835339927"
              className="flex text-sm items-center hover:text-secondary transition gap-2 text-white"
            >
              <span className="">
                <BsTelephonePlus />
              </span>
              <span>+86-0755-86372308
              </span>
            </a>
            <a
              href="mailto:marketing@wintec-machining.com"
              className="flex text-sm hover:underline  hover:text-secondary transition items-center gap-2 text-white">
              <span className="">
                <TfiEmail />
              </span>
              <span>marketing@wintec-machining.com</span>
            </a>
          </div>
          <div className="flex items-center justify-end gap-3">
            <span className="text-white text-sm">{t("NabTop.social")} :</span>
            <a
              target="blank"
              href="https://x.com/WintecMachining"
              className="flex items-center justify-center hover:text-secondary transition text-white  text-sm md:text-base rounded-full "
            >
              <FaSquareXTwitter />
            </a>
            <a
              target="blank"
              href="https://www.facebook.com/share/12Jp4VpTPYm/?mibextid=kFxxJD"
              className="flex items-center justify-center hover:text-secondary transition text-white  text-sm md:text-base rounded-full "
            >
              <FaFacebookF />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/company/wintec-precision-machining-co--ltd/mycompany/"
              className="flex items-center justify-center hover:text-secondary transition text-white  text-sm md:text-base rounded-full "
            >
              <FaLinkedinIn />
            </a>
            <a
  target="_blank"
  rel="noopener noreferrer"
  href="https://wa.me/+8618018740613"
  className="flex items-center justify-center hover:text-secondary transition text-white text-sm md:text-base rounded-full"
>
  <BsWhatsapp />
</a>
            {/* <a
                target="blank"
                  href="https://wa.me/+8801835339927"
                  className="flex items-center justify-center hover:bg-primary transition text-white h-7 w-7 border border-primary text-sm rounded-full "
                >
                  <RiWhatsappFill />
                </a> */}
          </div>
        </div>
      </div>
      <div
        className={`main_container flex justify-between items-center  ${isSticky ? "" : ""
          }`}
      >
        {/*Larges Device Logo  here >>>>>>>>>>>>>>>> */}
        <div className="nav_logo_side hidden md:block">
          {isRoot ? (
            <NavLink href="/">
              <Image
                src={isSticky ? mainLogo : logo}
                alt="logo"
                width={400}
                className="w-24 md:w-32"
              />
            </NavLink>
          ) : (
            <NavLink href="/">
              <Image
                src={mainLogo}
                alt="logo"
                width={400}
                className="w-24 md:w-32"
              />
            </NavLink>
          )}
        </div>
        {/* Only for mobile device Logo  */}
        <div className="nav_logo_side  md:hidden">
          <NavLink href="/">
            <Image
              src={mainLogo}
              alt="logo"
              width={400}
              className="w-32"
            />
          </NavLink>
        </div>
        {/* Center NavMenu Design start here >>>>>>>>>>>>>>>> */}
        <div
          className={`absolute ${navToggle ? "left-0" : "left-[-120%] w-1/2 "
            } top-[4.5rem] flex w-full flex-col pb-3 pt-2 transition-all duration-300  lg:static lg:w-[unset] lg:flex-row bg-white  lg:bg-transparent  lg:pb-0 lg:pt-0 `}
        >
          {/*============= for large device ========== */}
          <div className="hidden md:block">
            <ul
              className={`nav_manu flex text-sm uppercase items-center justify-center gap-0 px-1  ${isSticky
                ? " text-[#010749]"
                : `text-[#010749] ${isRoot && "md:text-white"}`
                }`}
            >
              {keys?.map((key, index) => (
                <li key={index} className=" mx-2 py-6 ">
                  <NavLink
                    href={t(`navData.${key}.path`)}
                  >
                    {t(`navData.${key}.title`)}
                    {t(`navData.${key}.subMenu`) == "isMenu" && <span className="arrow ml-2"></span>}
                  </NavLink>
                  {t(`navData.${key}.subMenu`) == "isMenu" && (
                    <SubMenuBar allCategories={allCategories} setNavToggle={setNavToggle}></SubMenuBar>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Only for mobile device ========================= */}
          <ul
            className={`mobile_nav_menu md:hidden pt-2 font-semibold pb-10 text-[14px] uppercase flex  flex-col items-start justify-center gap-2 px-1 text-[#010749]`}
          >

            {keys?.map((key, index) => (
              <li key={index} className="py-4 px-10 w-full bg-gray-50 p-2">
                {t(`navData.${key}.subMenu`) == "isMenu" ? (
                  <div
                    onClick={() => toggleSubMenu()}
                    className="flex items-center justify-between gap-2 cursor-pointer"
                  >
                    {t(`navData.${key}.title`)}
                    {openSubMenus ?
                      (
                        <span className="text-lg text-primary">
                          <IoIosArrowUp />
                        </span>
                      )
                      :
                      (
                        <span className="text-lg ">
                          <IoIosArrowDown />
                        </span>
                      )}
                  </div>
                ) : (
                  <MenuLink
                    onClick={() => setNavToggle(false)}
                    href={t(`navData.${key}.path`)}
                    activeClassName="text-secondary font-semibold"
                    exact={t(`navData.${key}.path`) === "/"}
                  >
                    {t(`navData.${key}.title`)}
                  </MenuLink>
                )}
                {/* Mobile sub menu code start from here..... */}
                {
                  t(`navData.${key}.subMenu`) == "isMenu" &&
                  openSubMenus &&
                  <SubMenuForMobile
                    setNavToggle={setNavToggle}
                    openSubMenus={openSubMenus}
                  ></SubMenuForMobile>
                }
              </li>
            ))}
            <div className="pl-10">
              <LocaleSwitcher></LocaleSwitcher>
            </div>
          </ul>
        </div>
        {/* Right toggle bar for mobile  */}
        <div className="nav_right hidden md:block">
          <LocaleSwitcher isRoot={isRoot} isSticky={isSticky}></LocaleSwitcher>
        </div>
        <label className="swap-rotate swap   bg-white rounded-full h-7 w-7  lg:hidden">
          <input
            checked={navToggle}
            onChange={() => setNavToggle((pre) => !pre)}
            type="checkbox"
          />
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
