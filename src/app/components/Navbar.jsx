"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
function Navbar() {
  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-42 text-xl">
      {/* My logo */}

      <div className="flex items-center gap-8">
        <div>
          <Link href="/">
            <Image
              src="/KhanhNguyenLogo.png"
              alt="My logo"
              width={160}
              height={160}
            ></Image>
          </Link>
        </div>
        <div className="hidden md:flex gap-4">
        {links.map((link) => (
            <NavLink link={link} key={link.title}></NavLink>
           ))}
        </div>
      </div>

      {/* menu */}
      <div>
        <div className="hidden md:flex gap-4">
          <Link href="">
            <Image
              src="/github.png"
              alt="github_logo"
              width={25}
              height={25}
            ></Image>
          </Link>
          <Link href="">
            <Image
              src="/facebook.png"
              alt="github_logo"
              width={25}
              height={25}
            ></Image>
          </Link>
        </div>
        {/* burger button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative md:hidden"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {/* Menu list */}
        {openMenu && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center gap-12 text-4xl z-10 items-center">
           {links.map((link) => (
            <Link href={link.url} key={link.title}>{link.title}</Link>
           ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
