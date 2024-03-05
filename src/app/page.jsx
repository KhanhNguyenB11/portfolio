"use client"
import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";
const Homepage = () => {
  return (
    <motion.div className="h-full w-full"initial={{y: "-200vh"}} animate={{y: "0%"}} transition={{duration: 1}}>
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-42 text-xl">
      {/* Img */}
      <div className="h-1/2 relative lg:h-full lg:w-1/2">
        <Image
          src={"/hero2.png"}
          alt="hero_img"
          fill
          className="object-contain"
        ></Image>
      </div>
      {/* Text */}
      <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
        <h1 className="text-xl sm:text-lg md:text-2xl font-bold text-center">
          Welcome to Khanh&apos;s Creative Odyssey: Exploring Innovation and
          Inspiration.
        </h1>
        <p className="text-sm md:text-2xl text-center  leading-relaxed ">
          I am Khanh, a creative developer based in Vietnam. I am passionate
          about creating unique and impactful digital experiences.This portfolio
          is a testament to the passion, dedication, and relentless pursuit of
          excellence.
        </p>
        {/* buttons */}
        <div className="flex gap-4 ">
          <button className="relative flex h-[50px] w-40 rounded items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-white hover:text-black hover:before:h-56 hover:before:w-56">
            <a href="/NguyenTuanAnhKhanh_fullstack.pdf" className="relative z-2" download={"KhanhNguyen CV"}>Download CV</a> 
          </button>
          <button className="relative flex h-[50px] w-40 rounded items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-white hover:text-black hover:before:h-56 hover:before:w-56">
            <Link href="/contact" className="relative z-2">Contact me</Link>
          </button>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Homepage;
