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
          <h1 className="text-4xl uppercase underline font-extrabold text-rose-300 shadow-[1px_1px_10px] shadow-rose-500 rounded-xl px-4 py-2 w-fit my-4 max-md:text-3xl max-sm:text-2xl">
            Stats & Skills
          </h1>
        </div>

        <div className="flex gap-4 items-center justify-center max-xl:gap-3 max-xl:flex-col-reverse">
          <RandomIcon />

          {/* Skills */}
          <motion.div
            className="w-full max-w-[800px] h-[600px] m-4 shadow-[1px_1px_10px] shadow-white hover:shadow-rose-400 py-4 rounded-xl overflow-hidden "
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
                  key={index}
                  className="space-y-2 mx-4 max-sm:space-y-0 border-b-2 border-white"
                >
                  <h2 className="text-2xl tracking-wider underline font-bold capitalize text-rose-400 max-sm:text-lg max-md:text-xl">
                    {category}
                  </h2>

                  <div className="flex overflow-x-auto gap-8 max-md:gap-6 max-sm:gap-4 px-2 py-8 max-sm:px-1 max-md:py-4 max-sm:py-1">
                    {skillIcons.map(({ icon, alt, title }, i) => (
                      <motion.div
                        key={i}
                        className={`group flex flex-col gap-2 max-sm:gap-1 p-2 min-w-[220px] max-md:min-w-[300px] max-sm:min-w-[230px] cursor-pointer items-center justify-center rounded-xl hover:-translate-y-2 hover:shadow-[1px_1px_10px] ${
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
                          width={120}
                          height={120}
                          className={`grayscale group-hover:grayscale-0 duration-200 transition-all`}
                        />
                        <p className="uppercase font-extrabold max-sm:text-base text-xl">
                          {title}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-8 justify-center max-sm:gap-4 max-xl:flex max-sm:grid"
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
                  className="flex rounded-xl flex-col cursor-pointer group overflow-hidden shadow-[1px_1px_10px] shadow-white relative hover:shadow-rose-400 w-40 h-48 max-lg:w-36 max-lg:h-44 max-md:h-40 max-md:w-32"
                  whileHover={{
                    rotate: `${angle}`,
                    translateY: "-8px",
                    scale: 1.08,
                    transition: { duration: 0.6, type: "spring", bounce: 0.6 },
                  }}
                >
                  <ImPushpin className="text-rose-600 absolute right-0 max-sm:text-xl max-md:text-2xl text-3xl z-10" />
                  <div className="flex overflow-hidden h-full">
                    <div className="w-[30%] bg-rose-400 flex justify-center items-start">
                      <Image
                        src={icon}
                        alt={alt}
                        width={80}
                        height={80}
                        className="grayscale transition-all px-1 py-4 duration-300 group-hover:grayscale-0 group-hover:-translate-y-2"
                      />
                    </div>
                    <div className="w-[70%] text-center flex flex-col justify-center items-center font-bold">
                      <p className="text-2xl sm:text-3xl text-teal-400 max-md:pt-4 max-sm:pt-2 pt-6">
                        {value}
                      </p>
                      <p className="uppercase max-sm:text-sm max-md:text-lg text-xl text-rose-400 tracking-wide">
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
