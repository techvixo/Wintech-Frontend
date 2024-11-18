import Image from "next/image";
import NavLink from "./NavLink";

import logo from "../../../../public/assets/logo/logo.png";
import Link from "next/link";
const SubMenuBar = ({ setNavToggle }) => {
  const servicesList =  [
    {
      serviceName: "CNC Machining Services",
      path: "/cnc-machining",
      subServiceName: [
        {
          path: "/cnc-turing",
          title: "CNC Turning",
        },
        {
          path: "/cnc-turing",
          title: "CNC Milling",
        },
        {
          path: "/cnc-turing",
          title: "Complex Mill-Turning",
        },
        {
          path: "/cnc-turing",
          title: "5-Axis Machining",
        },
      ]
    },
    {
      serviceName: "Materials Machined",
      path: "/cnc-machining",
      subServiceName: [
        {
          path: "/cnc-turing",
          title: "Metals",
        },
        {
          path: "/cnc-turing",
          title: "Plastics",
        },
        {
          path: "/cnc-turing",
          title: "Complex Mill",
        },
        {
          path: "/cnc-turing",
          title: " Machining",
        },
      ]
    },
    {
      serviceName: "Surface Finishing Services",
      path: "/cnc-machining",
      subServiceName: [
        {
          path: "/cnc-turing",
          title: "CNC Turning",
        },
        {
          path: "/cnc-turing",
          title: "CNC Milling",
        },
        {
          path: "/cnc-turing",
          title: "Complex Mill-Turning",
        },
        {
          path: "/cnc-turing",
          title: "5-Axis Machining",
        },
      ]
    },
  ]
  
  return (
    <div className="sub_nav_manu py-6 z-10 shadow-lg absolute top-28 left-0 right-0 w-full h-auto bg-primary p-1 text-white ">
      <div className="main_container">
        <div className="relative">
          <span className="absolute -z-50 top-[-20px] left-1/2  rotate-45  bg-primary h-5 w-5 "></span>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {servicesList?.slice(0,3)?.map((service, i) => {
            return (
              <div key={i} className="mx-auto z-40 p-2">
                <NavLink
                  onClick={() => setNavToggle(false)}
                  href={`/services${service?.path}`}
                  // activeClassName=""
                  // exact={service?.path === "/"}
                >
                  {service?.serviceName}
                </NavLink>
                <ul className=" py-2">
                  {service?.subServiceName?.map((subService, i) => {
                    return (
                      <li
                        key={i}
                        className="mx-auto z-40 hover:text-white capitalize font-normal hover:bg-[#50d6f730]  px-4 p-2"
                      >
                        <NavLink
                          onClick={() => setNavToggle(false)}
                          href={`/services/service-name${subService?.path}`}
                          // activeClassName=""
                          // exact={subService?.path === "/"}
                        >
                          {subService?.title}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div className="w-full flex items-center justify-center">
            <Link className="w-2/3" href={"/"}>
            <Image src={logo} alt="logo" width={200} className="w-full" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubMenuBar;
