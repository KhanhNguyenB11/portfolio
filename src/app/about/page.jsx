"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import Brain from "../components/Brain";
function AboutPage() {
  const containerRef = useRef();
  const skillsRef = useRef();
  const isSkillsRefInView = useInView(skillsRef, { once: true });
  const { scrollYProgress } = useScroll({ container: containerRef });
  return (
    <motion.div
      className="h-full w-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="h-full overflow-y-auto lg:flex" ref={containerRef}>
        {/* Text */}
        <div className=" p-4 sm:p-8 md:p-12 lg:p-20 xl:p-42 text-xl  gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* Bio */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p>
              Hello, and welcome to my portfolio! My name is Nguyen Tuan Anh
              Khanh, and I'm delighted to share a glimpse into my journey with
              you.
            </p>

            <p>
              I was born and raised in HCM city, where I developed an early
              fascination with programming. From a young age, I harbored a deep
              curiosity about the world around me, which fueled my desire to
              explore, learn, and create.
            </p>

            <p>
              My educational journey led me to pursue studies in IT. Throughout
              my academic endeavors, I immersed myself in various subjects,
              seeking to broaden my knowledge and refine my skills. I thrived in
              environments that challenged me to think critically, innovate, and
              collaborate with others.
            </p>

            <p>
              Upon completing my formal education, I embarked on a professional
              path driven by a passion for web development. Over the years, I've
              had the privilege of working with diverse teams and engaging in
              projects that have enriched my understanding and expertise.
            </p>

            <p>
              As a fullstack developer, I am dedicated to create, I am committed
              to making a positive impact and driving meaningful change in
              software industry.
            </p>

            <p>
              In addition to my professional pursuits, I am deeply passionate
              about programming. I believe in the power of hard working and
              strive to integrate them into both my personal and professional
              life.
            </p>

            <p>
              In my journey thus far, I've encountered challenges, celebrated
              victories, and embraced moments of growth. Each experience has
              shaped me into the individual I am today—a lifelong learner, a
              creative thinker, and a dedicated professional.
            </p>

            <p>
              As I continue to evolve and explore new horizons, I am excited
              about the possibilities that lie ahead. Through collaboration,
              innovation, and a steadfast commitment to excellence, I am eager
              to contribute to projects that inspire, uplift, and make a
              difference in the world.
            </p>

            <p>
              Thank you for taking the time to learn more about me. I look
              forward to connecting and exploring opportunities to collaborate
              in the future.
            </p>

            <p>Warm regards,</p>

            <p>
              Thank you for visiting my portfolio and have a great day!
              &#128516; &#128516; &#128516;{" "}
            </p>

            {/* sign svg */}
            <div className="self-start">
              <Image
                src={"/signature.svg"}
                alt="signature"
                width={185}
                height={77}
              ></Image>
            </div>
          </div>
          {/* Skills */}
          <div className="flex flex-col justify-center gap-12 pb-12" ref={skillsRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillsRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* Skills list */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillsRefInView ? { x: 0 } : {}}
              
              className="flex gap-4 flex-wrap lg:justify-start justify-center "
            >
              <div className="relative flex h-[50px] w-40 rounded items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-amber-400 hover:text-black hover:before:h-56 hover:before:w-56 group">
                <span className="relative z-2 group-hover:hidden">
                  JavaScript
                </span>
                <Image
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
                  }
                  alt="JavaScript image"
                  width={25}
                  height={25}
                  className="relative z-2 ml-2 group-hover:block hidden"
                ></Image>
              </div>
              <div className="relative flex h-[50px] w-40 rounded items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-blue-400 hover:text-black hover:before:h-56 hover:before:w-56 group">
                <span className="relative z-2 group-hover:hidden">
                  React.js
                </span>
                <Image
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  }
                  alt="JavaScript image"
                  width={25}
                  height={25}
                  className="relative z-2 ml-2 group-hover:block hidden"
                ></Image>
              </div>
              <div className="relative flex h-[50px] w-40 rounded items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-white hover:text-black hover:before:h-56 hover:before:w-56 group">
                <span className="relative z-2 group-hover:hidden">Next.js</span>
                <Image
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/394px-Nextjs-logo.svg.png"
                  }
                  alt="JavaScript image"
                  width={75}
                  height={75}
                  className="relative z-2 ml-2 group-hover:block hidden"
                ></Image>
              </div>
              <div className="relative flex h-[50px] w-40 rounded items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-blue-400 hover:text-black hover:before:h-56 hover:before:w-56 group">
                <span className="relative z-2 group-hover:hidden">
                  Tailwind CSS
                </span>
                <Image
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042"
                  }
                  alt="JavaScript image"
                  width={25}
                  height={25}
                  className="relative z-2 ml-2 group-hover:block hidden"
                ></Image>
              </div>

              <div className="relative flex h-[50px] w-40 rounded items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-green-600 hover:text-black hover:before:h-56 hover:before:w-56 group">
                <span className="relative z-2 group-hover:hidden">MongoDB</span>
                <Image
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
                  }
                  alt="JavaScript image"
                  width={85}
                  height={85}
                  className="relative z-2 ml-2 group-hover:block hidden"
                ></Image>
              </div>

              <div className="relative flex h-[50px] w-40 rounded items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-blue-700 hover:text-black hover:before:h-56 hover:before:w-56 group">
                <span className="relative z-2 group-hover:hidden">MySQL</span>
                <Image
                  src={
                    "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png"
                  }
                  alt="JavaScript image"
                  width={50}
                  height={50}
                  className="relative z-2 ml-2 group-hover:block hidden"
                ></Image>
              </div>
              <div className="relative flex h-[50px] w-40 rounded items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-green-500 hover:text-black hover:before:h-56 hover:before:w-56 group">
                <span className="relative z-2 group-hover:hidden">Node.js</span>
                <Image
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
                  }
                  alt="JavaScript image"
                  width={50}
                  height={50}
                  className="relative z-2 ml-2 group-hover:block hidden"
                ></Image>
              </div>
              <div className="relative flex h-[50px] w-40 rounded items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-gray-500 hover:text-black hover:before:h-56 hover:before:w-56 group">
                <span className="relative z-2 group-hover:hidden">
                  Express.js
                </span>
                <Image
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                  }
                  alt="JavaScript image"
                  width={70}
                  height={70}
                  className="relative z-2 ml-2 group-hover:block hidden"
                ></Image>
              </div>
              <div className="relative flex h-[50px] w-40 rounded items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-green-500 hover:text-black hover:before:h-56 hover:before:w-56 group">
                <span className="relative z-2 group-hover:hidden">Spring</span>
                <Image
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/2560px-Spring_Framework_Logo_2018.svg.png"
                  }
                  alt="JavaScript image"
                  width={75}
                  height={75}
                  className="relative z-2 ml-2 group-hover:block hidden"
                ></Image>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress}></Brain>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
