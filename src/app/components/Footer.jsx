"use client";

import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  return (
    <div className="absolute right-0 bottom-0 mb-8 mx-4 z-50 max-sm:w-[90%] max-sm:fixed">
      <div className="bg-gray-200 px-4 py-2 rounded-md flex max-sm:justify-around gap-4 items-center">
        <FaFileDownload className="text-4xl text-yellow-600 hover:scale-110 duration-150 transition-all hover:underline cursor-pointer" />
        <FaLinkedin className="text-4xl text-blue-800 hover:scale-110 duration-150 transition-all hover:underline cursor-pointer" />
        <FaSquareGithub className="text-4xl hover:scale-110 duration-150 transition-all hover:underline cursor-pointer" />
        <SiGeeksforgeeks className="text-4xl text-green-600 hover:scale-110 duration-150 transition-all hover:underline cursor-pointer" />
        <IoIosMailUnread className="text-4xl text-rose-600 hover:scale-110 duration-150 transition-all hover:underline cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
