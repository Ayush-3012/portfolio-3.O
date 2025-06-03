import Image from "next/image";
import { stats } from "../data/stats";
import { icons } from "../data/tech-icons";
import SkillSection from "../components/SkillSection";

export default function About() {
  return (
    <>
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-extrabold text-rose-300 shadow-[1px_1px_10px] shadow-rose-500 rounded-xl px-4 py-2 w-fit my-4">
            Stats & Skills
          </h1>
        </div>
        {stats.map(({ icon, alt, value, label, x, y }, index) => (
          <div
            key={index}
            className={`flex rounded-xl cursor-pointer group overflow-hidden shadow-[1px_1px_10px] hover:shadow-yellow-400 hover:scale-110 duration-150 transition-all h-40 w-40 absolute ${x} ${y}`}
          >
            <div className="w-[30%] bg-rose-600 rounded-s-xl flex justify-center items-start">
              <Image
                src={icon}
                alt={alt}
                width={100}
                height={100}
                className="grayscale transition-all px-1 py-4 duration-300 group-hover:grayscale-0 group-hover:-translate-y-2"
              />
            </div>

            <div className="w-[70%] text-center flex bg-gradient-to-br from-rose-500 via-white to-rose-500 flex-col justify-center items-center">
              <p className="text-3xl font-bold text-teal-600 pt-6">{value}</p>
              <p className="uppercase text-lg text-sky-600 flex tracking-wide">
                {label}
              </p>
            </div>
          </div>
        ))}
        <div className="w-[800px] h-[500px] m-4 shadow-[1px_1px_10px] shadow-white py-4 rounded-xl  overflow-hidden">
          <div className="overflow-y-auto h-full w-full">
            <SkillSection />
          </div>
        </div>
      </div>
    </>
  );
}
