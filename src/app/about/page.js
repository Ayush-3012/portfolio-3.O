// components/AboutStats.jsx

import Image from "next/image";
import RotatingSkills from "../components/RotatingSkills";

const stats = [
  {
    icon: "/assets/icons/project.png",
    alt: "Projects",
    value: "20+",
    label: "Projects",
    x: "left-5",
    y: "top-10",
  },
  {
    icon: "/assets/icons/programming.png",
    alt: "Coding",
    value: "5+",
    label: "Years of Coding",
    x: "right-5",
    y: "top-10",
  },
  {
    icon: "/assets/icons/certificate.png",
    alt: "Certifications",
    value: "8+",
    label: "Certificates",
    x: " left-5",
    y: "bottom-10",
  },
  {
    icon: "/assets/icons/skills.png",
    alt: "Skills",
    value: "15+",
    label: "Skills",

    x: " right-5",
    y: "bottom-10",
  },
];

export default function About() {
  return (
    <>
      <div className="w-full h-full bg-slate-400 relative rounded-xl flex flex-col items-center justify-center p-6 max-sm:p-3">
        <div>
          {stats.map(({ icon, alt, value, label, x, y }, index) => (
            <div
              key={index}
              className={`flex justify-center items-center rounded-xl transition-all duration-300 bg-slate-800 cursor-pointer group hover:scale-110 hover:shadow-[1px_1px_10px] shadow-red-500 absolute ${x} ${y} max-lg:-rotate-[15deg] max-md:-rotate-[10deg] max-sm:-rotate-[0deg] -rotate-[20deg] w-48 h-28`}
            >
              <div className="w-[20%] px-0.5 bg-gray-700 h-full absolute left-0 rounded-s-xl">
                <div className="h-18 relative">
                  <Image
                    src={icon}
                    alt={alt}
                    fill
                    objectFit="contain"
                    className="grayscale transition-transform duration-300 group-hover:grayscale-0 group-hover:-translate-y-2"
                  />
                </div>
              </div>

              <div className="w-[60%] h-full flex flex-col justify-center items-center">
                <p className="text-3xl font-bold text-cyan-400  text-center text-shadow-sky-300">
                  {value}
                </p>
                <p className="uppercase text-lg text-teal-400 text-center">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
        <RotatingSkills />
      </div>
    </>
  );
}
