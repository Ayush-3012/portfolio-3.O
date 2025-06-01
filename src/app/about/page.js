import Image from "next/image";
import { stats } from "../data/stats";
import { icons } from "../data/tech-icons";

export default function About() {
  return (
    <>
      <div className="relative w-full h-full flex items-center justify-center">
        {stats.map(({ icon, alt, value, label, x, y }, index) => (
          <div
            key={index}
            className={`flex rounded-xl cursor-pointer group overflow-hidden shadow-[1px_1px_10px] hover:shadow-rose-400 hover:scale-110 duration-150 transition-all h-40 w-40 absolute ${x} ${y}`}
          >
            <div className="w-[30%] bg-rose-950 rounded-s-xl flex justify-center items-start">
              <Image
                src={icon}
                alt={alt}
                width={100}
                height={100}
                className="grayscale transition-all px-1 py-4 duration-300 group-hover:grayscale-0 group-hover:-translate-y-2"
              />
            </div>

            <div className="w-[70%] text-center flex flex-col justify-center items-center">
              <p className="text-3xl font-bold text-red-400 pt-6">{value}</p>
              <p className="uppercase text-lg text-rose-400 flex tracking-wide">
                {label}
              </p>
            </div>
          </div>
        ))}
        <div className="w-[700px] h-[500px] m-4  rounded-xl shadow-[1px_1px_10px] shadow-pink-300 overflow-hidden">
          <div className="overflow-y-auto h-full w-full">
            <div className="grid grid-cols-3 overflow-hidden items-center justify-center gap-10">
              {icons.map(({ icon, alt }, index) => (
                <div
                  key={index}
                  className="group flex cursor-pointer items-center justify-center"
                >
                  <Image
                    src={icon}
                    alt={alt}
                    width={150}
                    height={150}
                    className="grayscale group-hover:shadow-[1px_1px_10px] group-hover:shadow-rose-400 transition-all p-2 rounded-lg duration-300 group-hover:grayscale-0 group-hover:-translate-y-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
