"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
function TransitionProvider({ children }) {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-full h-full bg-gradient-to-b from-[#6DD5FA] to-[#ee9ca7]  "
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-3xl z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "120vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-4xl lg:text-8xl z-50 w-fit h-fit cursor-default pointer-events-none"
          initial={{ visibility: true }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {pathName=== "/" ? "HOME" : pathName.substring(1).toUpperCase()}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black  rounded-t-3xl bottom-0 z-30"
          initial={{ height: "120vh" }}
          animate={{
            height: "0vh",
            transition: { delay: 0.5, ease: "easeOut" },
          }}
        ></motion.div>
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
}

export default TransitionProvider;
