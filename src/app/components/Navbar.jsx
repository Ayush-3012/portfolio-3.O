"use client";
import Link from "next/link";
import { FaCode, FaGraduationCap, FaHome, FaUser } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <div className="shadow-[1px_1px_20px] ronded-r-xl w-32 shadow-purple-700 relative">
        <div className="clip-left-bracket h-screen absolute w-full"></div>
        <div className="flex flex-col text-white z-50 items-end pr-2 justify-center w-full h-full turret-font space-y-5">
          <Link
            href="/"
            className="font-extrabold z-50 flex items-center hover:text-emerald-500 justify-center hover:underline"
          >
            <FaCode className="text-3xl " />
          </Link>
          <Link
            href="/home"
            className="text-md font-extrabold z-50 flex items-center hover:text-emerald-500 justify-center hover:underline"
          >
            <span className="max-md:hidden">Home</span>
            <FaHome className="hidden max-md:block text-4xl " />
          </Link>
          <Link
            href="/about"
            className="text-md font-extrabold flex z-50 items-center justify-center hover:underline hover:text-emerald-500"
          >
            <span className="max-md:hidden">About</span>
            <FaUser className="hidden max-md:block text-4xl" />
          </Link>
          <Link
            href="/projects"
            className="text-md font-extrabold flex z-50 items-center justify-center hover:underline hover:text-emerald-500"
          >
            <span className="max-md:hidden">Projects</span>
            <FaCode className="hidden max-md:block text-4xl" />
          </Link>
          <Link
            href="/certificates"
            className="text-md font-extrabold flex z-50 items-center justify-center hover:underline hover:text-emerald-500"
          >
            <span className="max-md:hidden">Certs</span>
            <FaGraduationCap className="hidden max-md:block text-4xl" />
          </Link>
          <Link
            href="/contact"
            className="text-md font-extrabold flex z-50 items-center justify-center hover:underline hover:text-emerald-500"
          >
            <span className="max-md:hidden">Contact</span>
            <IoCallSharp className="hidden max-md:block text-4xl" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
