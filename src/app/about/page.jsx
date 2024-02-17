"use client";
import React from "react";
import { motion } from "framer-motion";
function AboutPage() {
  return (
    <motion.div
      className="h-full w-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="">
        {/* Text */}
        <div className=" p-4 sm:p-8 md:p-12 lg:p-20 xl:p-42 text-xl  gap-24 md:gap-32 lg:gap-48">
          {/* Bio */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              I am a software developer with a passion for creating innovative
              and user-friendly solutions. I am excited to contribute my skills
              and knowledge to the world of software development.
            </p>
            <i>
              Thank you for visiting my portfolio and have a great day!
            </i>
          </div>
          {/* Skills */}
          <div>Skills</div>
        </div>
        {/* SVG */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
