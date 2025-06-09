"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.6 }}
    >
      <div className="flex items-center justify-center">
        <h1 className="text-4xl uppercase underline font-extrabold text-rose-300 shadow-[1px_1px_10px] shadow-rose-500 rounded-xl px-4 py-2 w-fit mt-4">
          Home
        </h1>
      </div>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 turret-font items-center justify-center gap-4 w-full h-full p-4">
          <motion.div
            className="flex flex-col gap-5 items-center justify-center"
            initial={{ x: 1500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, bounce: 0.6, type: "spring" }}
          >
            <motion.div
              className="w-[250px] md:w-[300px] lg:w-[350px] relative aspect-[3/4] overflow-hidden rounded-xl shadow-[0_0_20px] hover:shadow-pink-500 shadow-white "
              whileHover={{
                scale: 1.08,
                transition: { duration: 0.6, bounce: 0.6, type: "spring" },
              }}
            >
              <div className="clip-poly absolute w-full z-0 h-full"></div>
              <Image
                src="/assets/myImg-2.png"
                alt="Ayush Kumar"
                width={500}
                height={700}
                className="w-full h-full relative z-10 object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col group w-fit h-fit rounded-xl shadow-[0_0_10px] shadow-white hover:shadow-pink-500 text-white items-center justify-center px-8 py-12"
            initial={{ x: -1500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, bounce: 0.6, type: "spring" }}
          >
            <motion.div
              className="group-hover:-translate-y-2 p-4"
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", bounce: 0.6, duration: 0.6 },
              }}
            >
              <h1 className="text-4xl group-hover:scale-110 duration-150 transition-all mb-6 max-sm:text-2xl max-sm:text-center">
                Hi, I&apos;m{" "}
                <span className="text-rose-500 group-hover:font-extrabold group-hover:underline">
                  Ayush Kumar
                </span>{" "}
                a{" "}
                <span className="text-sky-400 group-hover:font-extrabold group-hover:underline">
                  MERN
                </span>{" "}
                Stack Developer.
              </h1>
              <p className="text-xl leading-relaxed duration-150 transition-all max-w-2xl max-sm:text-base max-sm:text-center">
                I&apos;m a recent{" "}
                <span className="text-rose-500">
                  B.Sc. (Hons.) Computer Science
                </span>{" "}
                graduate from{" "}
                <span className="text-sky-400">
                  Dyal Singh College, Delhi University
                </span>
                , with strong programming skills in{" "}
                <span className="text-fuchsia-500 group-hover:underline group-hover:font-extrabold">
                  C++, JavaScript, Python, Machine Learning, and Data Science
                </span>
                . I have scored <span className="text-red-400">8.8 CGPA.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
