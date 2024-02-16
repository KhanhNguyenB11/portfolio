"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
function NavLink({ link }) {
  const pathName = usePathname();
  return (
    <Link
      href={link.url}
      className={`rounded py-1 px-2 ${
        pathName === link.url &&
        "bg-black text-white"
      }`}
    >
      {link.title}
    </Link>
  );
}

export default NavLink;
