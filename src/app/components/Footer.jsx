"use client";

import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      className="w-32 shadow-[1px_1px_20px] ronded-l-xl shadow-purple-700 relative"
      initial={{ x: -1800 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className=" clip-right-bracket h-screen absolute w-full"></div>
      <div className="flex flex-col text-white turret-font w-full h-full items-start ml-4 justify-center space-y-5">
        <FaFileDownload className="text-4xl text-cyan-400 hover:scale-115 duration-150 transition-all hover:underline cursor-pointer" />
        <FaLinkedin className="text-4xl text-blue-800 hover:scale-115 duration-150 transition-all hover:underline cursor-pointer" />
        <FaSquareGithub className="text-4xl hover:scale-115 duration-150 transition-all hover:underline cursor-pointer" />
        <SiGeeksforgeeks className="text-4xl text-green-600 hover:scale-115 duration-150 transition-all hover:underline cursor-pointer" />
        <IoIosMailUnread className="text-4xl text-rose-600 hover:scale-115 duration-150 transition-all hover:underline cursor-pointer" />
      </div>
    </motion.div>
  );
};

export default Footer;
