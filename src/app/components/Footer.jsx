"use client";

import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  return (
    <div className="border-l-2 w-32 border-purple-700 relative">
      <div className=" clip-right-bracket h-screen absolute w-full"></div>
      <div className="flex flex-col text-white turret-font w-full h-full items-start ml-4 justify-center space-y-5">
        <FaFileDownload className="text-4xl text-yellow-600 hover:scale-115 duration-150 transition-all hover:underline cursor-pointer" />
        <FaLinkedin className="text-4xl text-blue-800 hover:scale-115 duration-150 transition-all hover:underline cursor-pointer" />
        <FaSquareGithub className="text-4xl hover:scale-115 duration-150 transition-all hover:underline cursor-pointer" />
        <SiGeeksforgeeks className="text-4xl text-green-600 hover:scale-115 duration-150 transition-all hover:underline cursor-pointer" />
        <IoIosMailUnread className="text-4xl text-rose-600 hover:scale-115 duration-150 transition-all hover:underline cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
