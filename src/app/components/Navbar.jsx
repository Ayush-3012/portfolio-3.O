"use client";
import Link from "next/link";
import { FaCode, FaGraduationCap, FaHome, FaUser } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <motion.div
        className="shadow-[1px_1px_20px] ronded-r-xl shadow-purple-700 h-screen w-28 relative max-md:w-screen max-md:h-20"
        initial={{ x: 1800 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 clip-left-bracket max-md:hidden"></div>
        <div className="absolute inset-0 clip-top-bracket hidden max-md:block"></div>
        <div className="flex flex-col text-white w-full h-full pr-2 z-50 items-end  justify-center space-y-5 max-md:space-y-1 max-md:space-x-5 max-sm:space-x-3 max-md:flex-row max-md:pr-0">
          <Link
            href="/"
            className="font-extrabold z-50 flex items-center hover:text-emerald-500 hover:scale-110 duration-150 transition-all justify-center hover:underline"
          >
            <FaCode className="text-4xl max-md:text-3xl max-sm:text-2xl" />
          </Link>
          <Link
            href="/home"
            className="text-md font-extrabold z-50 flex items-center hover:text-emerald-500 hover:scale-110 duration-150 transition-all justify-center hover:underline"
          >
            <span className="max-md:hidden">Home</span>
            <FaHome className="hidden max-md:block text-4xl max-md:text-3xl max-sm:text-2xl " />
          </Link>
          <Link
            href="/about"
            className="text-md font-extrabold flex z-50 items-center justify-center hover:underline hover:text-emerald-500 hover:scale-110 duration-150
            transition-all"
          >
            <span className="max-md:hidden">About</span>
            <FaUser className="hidden max-md:block text-4xl max-md:text-3xl max-sm:text-2xl" />
          </Link>
          <Link
            href="/projects"
            className=" duration-150
            transition-all text-md font-extrabold flex z-50 items-center justify-center hover:underline hover:text-emerald-500 hover:scale-110"
          >
            <span className="max-md:hidden">Projects</span>
            <FaCode className="hidden max-md:block text-4xl max-md:text-3xl max-sm:text-2xl" />
          </Link>
          <Link
            href="/certificates"
            className="duration-150
            transition-all text-md font-extrabold flex z-50 items-center justify-center hover:underline hover:text-emerald-500 hover:scale-110"
          >
            <span className="max-md:hidden">Certs</span>
            <FaGraduationCap className="hidden max-md:block text-4xl max-md:text-3xl max-sm:text-2xl" />
          </Link>
          <Link
            href="/contact"
            className="duration-150
            transition-all text-md font-extrabold flex z-50 items-center justify-center hover:underline hover:text-emerald-500 hover:scale-110"
          >
            <span className="max-md:hidden">Contact</span>
            <IoCallSharp className="hidden max-md:block text-4xl max-md:text-3xl max-sm:text-2xl" />
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
