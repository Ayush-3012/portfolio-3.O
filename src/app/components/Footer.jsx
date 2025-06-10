"use client";

import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const MotionLink = motion(Link);

  return (
    <motion.div
      className="w-32 shadow-[1px_1px_20px] ronded-l-xl shadow-purple-700 relative"
      initial={{ x: -1800 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className=" clip-right-bracket h-screen absolute w-full"></div>
      <div className="flex flex-col text-white turret-font w-full h-full items-start ml-4 justify-center space-y-5">
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
          <FaFileDownload className="text-4xl text-rose-400 cursor-pointer" />
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
          <FaLinkedin className="text-4xl text-blue-600   cursor-pointer" />
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
          <FaSquareGithub className="text-4xl   cursor-pointer" />
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
          <SiGeeksforgeeks className="text-4xl text-green-600   cursor-pointer" />
        </MotionLink>
      </div>
    </motion.div>
  );
};

export default Footer;
