"use client";

import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const MotionLink = motion(Link);

  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!hasMounted) return null;

  return (
    <motion.div
      className="shadow-[1px_1px_20px] ronded-r-xl shadow-purple-700 h-screen w-28 relative max-md:w-screen max-md:h-20"
      initial={isMobile ? { y: -1800 } : { x: -1800 }}
      animate={isMobile ? { y: 0 } : { x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 clip-right-bracket max-md:hidden"></div>
      <div className="absolute inset-0 clip-bottom-bracket hidden max-md:block"></div>
      <div className="flex flex-col text-white w-full h-full pl-2 z-50 items-start justify-center space-y-5 max-md:space-y-1 max-md:space-x-5 max-sm:space-x-3 max-md:flex-row max-md:pl-0">
        <MotionLink
          href={"/assets/Ayush Kumar - IT.pdf"}
          target="_blank"
          download
          whileHover={{
            scale: 1.2,
            translateY: "-3px",
            transition: { duration: 0.6, type: "spring", bounce: 0.6 },
            boxShadow: "0px 0px 5px white",
          }}
          className="rounded-xl p-0.5"
        >
          <FaFileDownload className="text-3xl text-rose-400 cursor-pointer max-md:text-2xl" />
        </MotionLink>
        <MotionLink
          href={"https://www.linkedin.com/in/ayush-kumar-6137651b4/"}
          target="_blank"
          whileHover={{
            scale: 1.2,
            translateY: "-3px",
            transition: { duration: 0.6, type: "spring", bounce: 0.6 },
            boxShadow: "0px 0px 5px white",
          }}
          className="rounded-xl p-0.5"
        >
          <FaLinkedin className="text-4xl text-blue-600   cursor-pointer max-md:text-3xl max-sm:text-2xl" />
        </MotionLink>
        <MotionLink
          href={"https://github.com/Ayush-3012/"}
          target="_blank"
          whileHover={{
            scale: 1.2,
            translateY: "-3px",
            transition: { duration: 0.6, type: "spring", bounce: 0.6 },
            boxShadow: "0px 0px 5px white",
          }}
          className="rounded-xl p-0.5"
        >
          <FaSquareGithub className="text-4xl   cursor-pointer max-md:text-3xl max-sm:text-2xl" />
        </MotionLink>
        <MotionLink
          href={"https://www.geeksforgeeks.org/user/ayushkumar_3012/"}
          target="_blank"
          whileHover={{
            scale: 1.2,
            translateY: "-3px",
            transition: { duration: 0.6, type: "spring", bounce: 0.6 },
            boxShadow: "0px 0px 5px white",
          }}
          className="rounded-xl p-0.5"
        >
          <SiGeeksforgeeks className="text-4xl text-green-600   cursor-pointer max-md:text-3xl max-sm:text-2xl" />
        </MotionLink>
      </div>
    </motion.div>
  );
};

export default Footer;
