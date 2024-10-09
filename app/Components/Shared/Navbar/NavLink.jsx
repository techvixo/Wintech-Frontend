"use client";
import classNames from "@/app/utils/classNames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  children,
  href,
  exact = false,
  activeClassName,
  ...props
}) => {
  const path = usePathname();
  const active = exact ? path === href : path.startsWith(href);
  const classes = classNames(props.className, active && activeClassName);
  if (classes) {
    props.className = classes;
  }

  return (
    <Link className="block" href={href} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
