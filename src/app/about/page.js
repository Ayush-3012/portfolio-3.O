import Image from "next/image";
import { stats } from "../data/stats";
import { icons } from "../data/tech-icons";

export default function About() {
  const skillSections = Object.entries(icons);

  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-extrabold text-rose-300 shadow-[1px_1px_10px] shadow-rose-500 rounded-xl px-4 py-2 w-fit my-4">
          Stats & Skills
        </h1>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-[800px] h-[600px] m-4 shadow-[1px_1px_10px] shadow-white py-4 rounded-xl  overflow-hidden">
            <div className="overflow-y-auto h-full w-full">
              {skillSections.map(([category, skillIcons], index) => (
                <div
                  key={category}
                  className="space-y-2 mx-4 border-b-2 border-white"
                >
                  <h2 className="text-xl underline font-bold capitalize text-rose-400">
                    {category}
                  </h2>

                  <div className={`flex overflow-x-auto px-2 py-8`}>
                    {skillIcons.map(({ icon, alt }, i) => (
                      <div
                        key={i}
                        className={`group flex flex-col gap-2 p-2 min-w-[220px] mx-3 cursor-pointer items-center justify-center rounded-xl hover:-translate-y-2 hover:shadow-[1px_1px_10px] hover:scale-110 duration-200 transition-all ${
                          i % 2
                            ? "hover:shadow-red-400 text-red-400"
                            : "hover:shadow-cyan-400 text-cyan-400"
                        }`}
                      >
                        <Image
                          src={icon}
                          alt={alt}
                          width={150}
                          height={150}
                          className={`grayscale group-hover:grayscale-0 duration-200 transition-all`}
                        />
                        <p className="uppercase text-xl">{alt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid h-full items-center justify-center grid-cols-2 gap-8 mr-6">
          {stats.map(({ icon, alt, value, label }, index) => (
            <div
              key={index}
              className={`flex rounded-xl cursor-pointer group overflow-hidden shadow-[1px_1px_10px] hover:shadow-yellow-400 hover:scale-110 duration-200 transition-all h-48 w-40`}
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
        </div>
      </div>
    </>
  );
}
