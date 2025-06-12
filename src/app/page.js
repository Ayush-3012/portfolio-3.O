"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaCode } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
} from "react-icons/si";

export default function Index() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute inset-0 flex flex-wrap gap-10 justify-center items-center pointer-events-none"
      >
        {[
          FaReact,
          FaNodeJs,
          FaPython,
          SiMongodb,
          SiCplusplus,
          SiTailwindcss,
          SiNextdotjs,
          FaGitAlt,
          FaCode,
        ].map((Icon, index) => (
          <motion.div
            key={index}
            className="text-[80px] text-white"
            animate={{
              y: [0, 10, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ repeat: Infinity, duration: 3, delay: index * 0.3 }}
          >
            <Icon />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className={` z-10 bg-white/4 p-10 rounded-3xl shadow-xl border border-white/10 max-lg:p-8 max-md:p-6 max-sm:p-4`}
      >
        <motion.h1
          className="text-5xl font-extrabold z-10 tracking-wide bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text text-center max-md:text-4xl max-sm:text-3xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hi, I&apos;m Ayush Kumar
        </motion.h1>

        <motion.p
          className="mt-4 text-lg hover:text-rose-400 max-w-2xl text-gray-300 text-center max-sm:mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          MERN Stack Developer | C++ | JS | DSA | Full Stack Wizard
        </motion.p>

        <motion.div
          className="mt-8 text-center max-sm:mt-6"
          whileHover={{
            scaleX: 1.1,
            transition: { duration: 0.6, type: "spring", bounce: 0.6 },
          }}
        >
          <Link
            href={"/home"}
            className="px-8 py-3 bg-white text-black hover:bg-black hover:text-white font-semibold rounded-full"
          >
            Enter Portfolio
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
