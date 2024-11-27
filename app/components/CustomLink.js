"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ path, children }) => {
  const pathName = usePathname();
  const activeLink = pathName === path;

  console.log(activeLink, "this is the active link");

  return (
    <Link className={activeLink ? "text-blue-500" : ""} href={path}>
      {children}
    </Link>
  );
};

export default CustomLink;
