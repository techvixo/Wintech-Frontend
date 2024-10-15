"use client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";
import logo from "@@/logo/logo.png";
import mainLogo from "@@/logo/main-logo.png";
import secondLogo from "@@/logo/second-logo.png";
import { MdOutlineEmail, MdPhoneIphone } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import LngSwitcher from "../LngSwitcher/LngSwitcher";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isRoot, setIsRoot] = useState(true);
  const [openSubMenus, setOpenSubMenus] = useState({}); // State to track open submenus
  // const router = useRouter();
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

  const toggleSubMenu = (path) => {
    setOpenSubMenus((prevOpenSubMenus) => ({
      ...prevOpenSubMenus,
      [path]: !prevOpenSubMenus[path],
    }));
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
      subManu: [
        {
          path: "/products/modernization",
          title: "Modernization",
        },
        {
          path: "/products/repair",
          title: "Repair",
        },
        {
          path: "/products/maintenance",
          title: "Maintenance",
        },
        {
          path: "/products/digital-service",
          title: "Digital Service",
        },
        {
          path: "/products/service-plan",
          title: "Service Plan",
        },
      ],
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
  return (
    <nav
      className={`z-40  w-full fixed left-0 right-0 py-2 lg:py-0  ${
        isSticky
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
            className="flex text-sm items-center gap-2 text-white"
          >
            <span className="">
              <FaWhatsapp />
            </span>
            <span>+880 1835339927</span>
          </a>
          <p className="flex text-sm items-center gap-2 text-white">
            <span className="">
              <TfiEmail />
            </span>
            <span>techvixo@gmail.com</span>
          </p>
        </div>
        <div className="flex items-center justify-end gap-3">
          <span className="text-white text-sm">Follow Us :</span>
          <a
            target="blank"
            href="https://x.com/Tech_Vixo"
            className="flex items-center justify-center hover:bg-primary transition text-white  text-sm md:text-base rounded-full "
          >
            <FaSquareXTwitter />
          </a>
          <a
            target="blank"
            href=" https://www.facebook.com/profile.php?id=61554756906846"
            className="flex items-center justify-center hover:bg-primary transition text-white  text-sm md:text-base rounded-full "
          >
            <FaFacebookF />
          </a>
          <a
            target="blank"
            href=" https://www.linkedin.com/company/tech-vixo/"
            className="flex items-center justify-center hover:bg-primary transition text-white  text-sm md:text-base rounded-full "
          >
            <FaLinkedinIn />
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/tech_vixo/"
            className="flex items-center justify-center hover:bg-primary transition text-white  text-sm md:text-base rounded-full "
          >
            <BsInstagram />
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
        className={`main_container flex justify-between items-center  ${
          isSticky ? "" : ""
        }`}
      >
        {/* Logo side here >>>>>>>>>>>>>>>> */}
        <div className="nav_logo_side hidden md:block">
          {isRoot ? (
            <Link href="/">
              <Image
                src={isSticky ? mainLogo : logo}
                alt="logo"
                width={400}
                className="w-24 md:w-32"
              />
            </Link>
          ) : (
            <Link href="/">
              <Image
                src={mainLogo}
                alt="logo"
                width={400}
                className="w-24 md:w-32"
              />
            </Link>
          )}
        </div>
        {/* Only for mobile device  */}
        <div className="nav_logo_side  md:hidden">
        <Link href="/">
              <Image
                src={mainLogo}
                alt="logo"
                width={400}
                className="w-32"
              />
            </Link>
        </div>
        {/* NAv menu side here >>>>>>>>>>>>>>>> */}
        <div
          className={`absolute ${
            navToggle ? "left-0" : "left-[-120%] w-1/2 "
          } top-[4.5rem] flex w-full flex-col pb-3 pt-2 transition-all duration-300  lg:static lg:w-[unset] lg:flex-row bg-white  lg:bg-transparent  lg:pb-0 lg:pt-0 `}
        >
          {/*============= for large device ========== */}
          <div className="hidden md:block">
            <ul
              className={`nav_manu flex text-sm uppercase items-center justify-center gap-0 px-1  ${
                isSticky
                  ? " text-[#010749]"
                  : `text-[#010749] ${isRoot && "md:text-white"}`
              }`}
            >
              {navData.map(({ path, title, subManu }) => (
                <li key={path} className=" mx-2 py-6 relative">
                  <NavLink
                    onClick={() => setNavToggle(false)}
                    href={path}
                    activeClassName="text-[#1976D3] font-semibold"
                    exact={path === "/"}
                    className="flex items-center gap-2"
                  >
                    {title}
                    {subManu.length > 0 && <span className="arrow"></span>}
                  </NavLink>
                  {subManu?.length > 0 && (
                    <ul className="sub_nav_manu  z-10 shadow-lg absolute top-16 left-[-15px] w-60 h-auto bg-primary p-1 text-white ">
                      <div className="relative">
                        <span className="absolute -z-50 top-[-10px]  rotate-45 left-5 bg-primary h-5 w-5 "></span>
                      </div>
                      {subManu?.map(({ path, title }) => (
                        <li
                          key={path}
                          className="mx-auto z-40 hover:bg-white  px-4 p-2"
                        >
                          <NavLink
                            onClick={() => setNavToggle(false)}
                            href={path}
                            activeClassName=""
                            exact={path === "/"}
                          >
                            {title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Only for mobile device ========================= */}
          <ul
            className={`mobile_nav_menu md:hidden pt-2 font-semibold pb-10 text-[14px] uppercase flex  flex-col items-start justify-center gap-2 px-1 text-[#010749]`}
          >
            {navData.map(({ path, title, subManu }) => (
              <li key={path} className="py-4 px-10 w-full bg-gray-50 p-2">
                {subManu.length > 0 ? (
                  <div
                    onClick={() => toggleSubMenu(path)}
                    className="flex items-center justify-between gap-2 cursor-pointer"
                  >
                    {title}
                    {openSubMenus[path] ? (
                      <span className="text-lg text-primary">
                        <IoIosArrowUp />
                      </span>
                    ) : (
                      <span className="text-lg ">
                        <IoIosArrowDown />
                      </span>
                    )}
                  </div>
                ) : (
                  <NavLink
                    onClick={() => setNavToggle(false)}
                    href={path}
                    activeClassName="text-[#34ABCD]"
                    exact={path === "/"}
                    className="flex items-center gap-2"
                  >
                    {title}
                  </NavLink>
                )}
                {subManu.length > 0 && (
                  <ul
                    className={`mobile_sub_nav_menu flex flex-col text-[13px] font-normal text-[#111547] w-full ${
                      openSubMenus[path] ? "open pt-3" : ""
                    }`}
                  >
                    {subManu.map(({ path, title }) => (
                      <li
                        key={path}
                        className="flex items-center gap-2 hover:bg-white py-3"
                      >
                        <span className="text-primary">
                          <MdOutlineKeyboardDoubleArrowRight />
                        </span>
                        <NavLink
                          onClick={() => setNavToggle(false)}
                          href={path}
                          exact={path === "/"}
                        >
                          {title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            
          </ul>
        </div>
        {/* Right toggle bar for mobile  */}
        <div className="nav_right hidden md:block">
          <LngSwitcher isRoot={isRoot} isSticky={isSticky}></LngSwitcher>
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
