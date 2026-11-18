"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import RandomIcon from "../components/RandomIcon";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.6 }}
      className="relative h-full"
    >
      <div className="flex items-center justify-center">
        <h1 className="text-4xl uppercase underline font-extrabold text-rose-300 shadow-[1px_1px_10px] shadow-rose-500 rounded-xl px-4 py-2 w-fit my-4 max-md:text-3xl max-sm:text-2xl">
          Experience
        </h1>
      </div>

      <div className="relative mx-10 mb-4 max-md:mx-3">
        <RandomIcon />
        <motion.div
          className="max-h-[650px] max-md:max-h-none overflow-y-auto pr-3"
          initial={{ y: 800 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 1, type: "spring", bounce: 0.6 }}
        >
          <div className="relative ml-5 border-l-2 border-cyan-400 py-2">
            {experience.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.period}`}
                className="relative ml-8 mb-6 last:mb-2 rounded-lg border border-white/15 bg-white/[0.04] p-5 shadow-[1px_1px_10px] shadow-white/20 hover:shadow-cyan-400/60 transition-all max-md:ml-6 max-md:p-4"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.15 }}
              >
                <div className="absolute -left-[44px] max-md:-left-[38px] top-5 flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 text-white shadow-[0_0_12px] shadow-rose-400">
                  <FaBriefcase className="text-base" />
                </div>

                <div className="flex items-start justify-between gap-4 max-md:flex-col max-md:gap-2">
                  <div>
                    <h2 className="text-2xl font-extrabold text-rose-300 max-md:text-xl">
                      {item.role}
                    </h2>
                    <p className="text-lg font-bold text-cyan-300 max-md:text-base">
                      {item.company} | {item.location}
                    </p>
                  </div>
                  <div className="shrink-0 text-right max-md:text-left">
                    <p className="text-rose-400 font-bold">{item.period}</p>
                    <p className="text-sm text-slate-300">{item.type}</p>
                  </div>
                </div>

                <p className="mt-3 text-white/90">{item.description}</p>

                <ul className="mt-3 space-y-1.5 text-slate-200">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="text-cyan-400">&#9656;</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
