"use client";

import Image from "next/image";
import { icons } from "../data/tech-icons.js";

const SkillSection = () => {
  const skillSections = Object.entries(icons);

  return (
    <>
      {skillSections.map(([category, skillIcons], index) => (
        <div key={category} className="space-y-2 mx-4 border-b-2 border-white">
          <h2 className="text-xl underline font-bold capitalize text-rose-400">
            {category}
          </h2>

          <div
            className={`flex gap-10 overflow-x-auto px-2 py-4 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {skillIcons.map(({ icon, alt }, i) => (
              <div
                key={i}
                className={`group flex min-w-[220px] flex-shrink-0 cursor-pointer items-center justify-center `}
              >
                <Image
                  src={icon}
                  alt={alt}
                  width={150}
                  height={150}
                  className={`grayscale group-hover:shadow-[1px_1px_10px]  group-hover:scale-110 transition-all p-2 rounded-lg duration-150 group-hover:grayscale-0 group-hover:-translate-y-2
                  ${
                    i % 3 > 1
                      ? "group-hover:shadow-red-500"
                      : "group-hover:shadow-cyan-400"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SkillSection;
