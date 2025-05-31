"use client";
import Link from "next/link";
import { FaCode, FaGraduationCap, FaHome, FaUser } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 mt-8 mx-4 z-50 max-sm:mt-4 max-sm:w-[90%] max-sm:fixed">
      <div className="bg-gray-200 rounded-md px-4 py-2 flex gap-4 items-center max-sm:justify-around">
        <Link
          href="/"
          className="text-sm font-medium flex items-center justify-center hover:underline "
        >
          <span className="max-md:hidden">Home</span>
          <FaHome className="max-md:block hidden text-2xl" />
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium flex items-center justify-center hover:underline "
        >
          <span className="max-md:hidden">About</span>
          <FaUser className="max-md:block hidden text-2xl" />
        </Link>
        <Link
          href="/projects"
          className="text-sm font-medium flex items-center justify-center hover:underline "
        >
          <span className="max-md:hidden">Projects</span>
          <FaCode className="max-md:block hidden text-2xl" />
        </Link>
        <Link
          href="/certificates"
          className="text-sm font-medium flex items-center justify-center hover:underline "
        >
          <span className="max-md:hidden">Certificates</span>
          <FaGraduationCap className="max-md:block hidden text-2xl" />
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium flex items-center justify-center hover:underline "
        >
          <span className="max-md:hidden">Contact</span>
          <IoCallSharp className="max-md:block hidden text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
