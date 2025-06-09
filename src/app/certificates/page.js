"use client";

import Image from "next/image";
import { myCertificates } from "../data/certificates";
import { motion } from "framer-motion";

const Certificates = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.6 }}
      >
        <div className="flex items-center justify-center">
          <h1 className="text-4xl uppercase underline font-extrabold text-rose-300 shadow-[1px_1px_10px] shadow-rose-500 rounded-xl px-4 py-2 w-fit my-4">
            My Certificates
          </h1>
        </div>
        <motion.div
          className="p-4 grid grid-cols-3 gap-8 my-4 mx-10 overflow-y-auto h-[80%]"
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 1, type: "spring", bounce: 0.6 }}
        >
          {myCertificates.map(({ img, title, description }, index) => (
            <motion.div
              key={index}
              className="relative shadow-white flex group flex-col rounded-se-xl rounded-es-xl p-4 shadow-[1px_1px_10px] hover:shadow-green-500 hover:-translate-y-2 hover:rounded-se-none hover:rounded-es-none hover:rounded-ee-xl hover:rounded-ss-xl"
              whileHover={{
                translateY: "-4px",
                scaleX: 1.04,
                transition: { duration: 1, type: "spring", bounce: 0.6 },
              }}
            >
              <div className="max-w-full max-h-full w-96 h-48 transition-all grayscale group-hover:grayscale-0 group-hover:scale-105 rounded-ee-xl rounded-ss-xl group-hover:shadow-[1px_1px_10px] group-hover:shadow-green-400 duration-200">
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
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Certificates;
