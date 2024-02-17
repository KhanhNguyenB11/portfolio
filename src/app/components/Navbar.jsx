"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { list } from "postcss";
function Navbar() {
  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];
  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition:{
        when:"beforeChildren",
        staggerChildren: 0.2,
      }
    },
  };
  const listItemVariants={
    closed:{
      x:-10,
      opacity:0
    },
    opened:{
      x:0,
      opacity:1,
    }
  }
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

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
          <motion.div
            animate={openMenu ? "opened" : "closed"}
            variants={topVariants}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            animate={openMenu ? "opened" : "closed"}
            variants={centerVariants}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            animate={openMenu ? "opened" : "closed"}
            variants={bottomVariants}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* Menu list */}
        {openMenu && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div key={link.title} variants={listItemVariants} className="">
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
