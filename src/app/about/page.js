"use client";

import Image from "next/image";
import { stats } from "../data/stats";
import { icons } from "../data/tech-icons";
import { ImPushpin } from "react-icons/im";
import { motion } from "framer-motion";
import RandomIcon from "../components/RandomIcon";

export default function About() {
  const skillSections = Object.entries(icons);

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.6 }}
      >
        <div className="flex items-center justify-center">
          <h1 className="text-4xl uppercase underline font-extrabold text-rose-300 shadow-[1px_1px_10px] shadow-rose-500 rounded-xl px-4 py-2 w-fit my-4">
            Stats & Skills
          </h1>
        </div>
        <div className="flex gap-4">
          <RandomIcon />
          <motion.div
            className="w-[800px] h-[600px] m-4 bg-gradient-to-tr  shadow-[1px_1px_10px] shadow-white hover:shadow-rose-400 py-4 rounded-xl  overflow-hidden"
            initial={{ y: -800 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.2,
              delay: 1,
              type: "spring",
              bounce: 0.6,
            }}
          >
            <div className="overflow-y-auto h-full w-full">
              {skillSections.map(([category, skillIcons], index) => (
                <div
                  key={category}
                  className="space-y-2 mx-4 border-b-2 border-white"
                >
                  <h2 className="text-2xl tracking-wider underline font-bold capitalize text-rose-400">
                    {category}
                  </h2>

                  <div className={`flex overflow-x-auto px-2 py-8`}>
                    {skillIcons.map(({ icon, alt, title }, i) => (
                      <motion.div
                        key={i}
                        className={`group flex flex-col gap-4 p-2 min-w-[220px] mx-3 cursor-pointer items-center justify-center rounded-xl hover:-translate-y-2 hover:shadow-[1px_1px_10px] ${
                          i % 2
                            ? "hover:shadow-red-400 text-red-400"
                            : "hover:shadow-cyan-400 text-cyan-400"
                        }`}
                        whileHover={{
                          translateY: "-8px",
                          scaleX: 1.04,
                          transition: {
                            duration: 0.6,
                            type: "spring",
                            bounce: 0.6,
                          },
                        }}
                      >
                        <Image
                          src={icon}
                          alt={alt}
                          width={150}
                          height={150}
                          className={`grayscale group-hover:grayscale-0 duration-200 transition-all`}
                        />
                        <p className="uppercase font-extrabold text-xl">
                          {title}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="grid items-center justify-center relative grid-cols-2 gap-8 mr-6"
            initial={{ y: 800 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.2,
              delay: 1,
              type: "spring",
              bounce: 0.6,
            }}
          >
            {stats.map(({ icon, alt, value, label, angle }, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <motion.div
                  className={`flex rounded-xl flex-col cursor-pointer group overflow-hidden shadow-[1px_1px_10px] shadow-white hover:shadow-rose-400 h-48 w-40`}
                  whileHover={{
                    rotate: `${angle}`,
                    translateY: "-8px",
                    scale: 1.08,
                    transition: { duration: 0.6, type: "spring", bounce: 0.6 },
                  }}
                >
                  <ImPushpin className="text-rose-600 absolute right-0 text-3xl z-10" />
                  <div className="flex overflow-hidden h-full">
                    <div className="w-[30%] bg-rose-400 flex justify-center items-start">
                      <Image
                        src={icon}
                        alt={alt}
                        width={100}
                        height={100}
                        className={`grayscale transition-all px-1 py-4 duration-300 group-hover:grayscale-0 group-hover:-translate-y-2 hover:-rotate-[${angle}]`}
                      />
                    </div>
                    <div
                      className={`w-[70%] text-center flex flex-col justify-center items-center font-bold`}
                    >
                      <p className={`text-3xl text-teal-400 pt-6`}>{value}</p>
                      <p className="uppercase text-lg text-rose-400 flex tracking-wide ">
                        {label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
