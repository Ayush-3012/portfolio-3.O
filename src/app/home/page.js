"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RandomIcon from "../components/RandomIcon";

export default function Home() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.6 }}
    >
      <div className="flex items-center justify-center">
        <h1 className="text-4xl uppercase underline font-extrabold text-rose-300 shadow-[1px_1px_10px] shadow-rose-500 rounded-xl px-4 py-2 w-fit mt-4 max-md:text-3xl max-sm:text-2xl">
          Home
        </h1>
      </div>

      <div className="relative w-full min-h-screen overflow-hidden max-lg:overflow-y-auto">
        <RandomIcon />

        <div className="grid grid-cols-2 max-lg:grid-cols-1 my-20 turret-font items-center justify-center px-8 py-4 relative z-10 max-lg:my-10 max-md:my-5 max-sm:my-2 max-lg:gap-4 max-md:gap-6">
          <motion.div
            className="flex flex-col gap-5 items-center justify-center"
            initial={{ x: 1500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, bounce: 0.6, type: "spring" }}
          >
            <motion.div
              className="max-sm:w-[250px] max-md:w-[300px] w-[350px] relative aspect-[3/4] overflow-hidden rounded-xl shadow-[0_0_20px] hover:shadow-pink-500 shadow-white"
              whileHover={{
                scale: 1.08,
                transition: { duration: 0.6, bounce: 0.6, type: "spring" },
              }}
            >
              <div className="clip-left-poly absolute w-full h-full"></div>
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
            className="flex flex-col group w-fit max-w-[90vw] h-fit rounded-xl shadow-[0_0_10px] shadow-white hover:shadow-pink-500 text-white items-center justify-center px-8 py-12 max-lg:py-10 max-lg:px-7 max-md:py-8 max-md:px-5 max-sm:py-4 max-sm:px-3"
            initial={{ x: -1500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, bounce: 0.6, type: "spring" }}
            whileHover={{
              scale: 1.08,
              transition: { duration: 0.6, bounce: 0.6, type: "spring" },
            }}
          >
            <motion.div
              className="group-hover:-translate-y-2 p-4"
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", bounce: 0.6, duration: 0.6 },
              }}
            >
              <h1 className="text-4xl group-hover:scale-110 duration-150 transition-all mb-6 text-center max-md:text-3xl max-sm:text-2xl">
                Hi, I&apos;m{" "}
                <span className="text-rose-500 group-hover:font-extrabold group-hover:underline">
                  Ayush Kumar
                </span>{" "}
                a{" "}
                <span className="text-sky-400 group-hover:font-extrabold group-hover:underline">
                  MERN Stack, NEXT JS
                </span>{" "}
                Developer.
              </h1>
              <p className="text-xl leading-relaxed duration-150 transition-all text-center max-md:text-lg  max-sm:text-base">
                I&apos;m a skilled{" "}
                <span className="text-rose-500">
                  B.Sc. (Hons.) Computer Science
                </span>{" "}
                graduate from{" "}
                <span className="text-sky-400">
                  Dyal Singh College, Delhi University
                </span>
                , with strong programming skills in{" "}
                <span className="text-fuchsia-500 group-hover:underline group-hover:font-extrabold">
                  C++, JavaScript, Python, MERN Stack, Next Js
                </span>{" "}
                with experience in building web applications.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
