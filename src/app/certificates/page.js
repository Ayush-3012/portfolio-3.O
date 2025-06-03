import Image from "next/image";
import { myCertificates } from "../data/certificates";

const Certificates = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-extrabold text-rose-300 shadow-[1px_1px_10px] shadow-rose-500 rounded-xl px-4 py-2 w-fit my-4">
          My Certificates
        </h1>
      </div>
      <div className="p-4 grid grid-cols-3 gap-8 my-4 mx-10 overflow-y-auto h-[80%]">
        {myCertificates.map(({ img, title, description }, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-tl from-cyan-400 via-slate-950 to-cyan-400 flex group flex-col rounded-se-xl rounded-es-xl p-4 transition-all shadow-[1px_1px_10px] hover:shadow-green-500 hover:-translate-y-2 hover:rounded-se-none hover:rounded-es-none hover:rounded-ee-xl hover:rounded-ss-xl"
          >
            <div className="max-w-full max-h-full w-96 h-48 transition-all grayscale group-hover:grayscale-0 group-hover:scale-105 rounded-ee-xl rounded-ss-xl group-hover:shadow-[1px_1px_10px] group-hover:shadow-white duration-200">
              <Image
                src={img}
                alt={title}
                fill
                className="rounded-ee-xl rounded-ss-xl"
              />
            </div>
            <div className="p-5">
              <h4 className="text-4xl mb-2 transition-all cursor-pointer font-extrabold text-green-300 group-hover:text-green-400 group-hover:underline group-hover:scale-105">
                {title}
              </h4>
              <p className="text-white text-lg">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Certificates;
