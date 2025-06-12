"use client";

import Image from "next/image";
import { myCertificates } from "../data/certificates";
import { motion } from "framer-motion";
import RandomIcon from "../components/RandomIcon";

const Certificates = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.6 }}
      >
        <div className="flex items-center justify-center">
          <h1 className="text-4xl uppercase underline font-extrabold text-rose-300 shadow-[1px_1px_10px] shadow-rose-500 rounded-xl px-4 py-2 w-fit my-4 max-md:text-3xl max-sm:text-2xl">
            My Certificates
          </h1>
        </div>
        <motion.div
          className="p-4 grid grid-cols-3 gap-8 my-4 mx-10 max-xl:mx-4 max-lg:my-3 max-lg:mx-3 max-md:my-2 max-md:mx-2 max-sm:mx-1 overflow-y-auto h-[600px] max-lg:grid-cols-2 max-xl:gap-4 max-lg:gap-3 max-md:grid-cols-1 max-md:gap-2 max-sm:gap-1 max-lg:p-3 max-md:p-2"
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 1, type: "spring", bounce: 0.6 }}
        >
          <RandomIcon />
          {myCertificates.map(({ img, title, description }, index) => (
            <motion.div
              key={index}
              className="relative shadow-white flex group flex-col rounded-se-xl rounded-es-xl p-4 shadow-[1px_1px_10px] hover:shadow-green-500 hover:-translate-y-2 hover:rounded-se-none hover:rounded-es-none hover:rounded-ee-xl hover:rounded-ss-xl max-lg:p-3 max-md:p-2"
              whileHover={{
                translateY: "-4px",
                scaleX: 1.04,
                transition: { duration: 1, type: "spring", bounce: 0.6 },
              }}
            >
              <div className="max-w-full max-h-full w-96 h-48 max-md:w-full transition-all grayscale group-hover:grayscale-0 group-hover:scale-105 rounded-ee-xl rounded-ss-xl group-hover:shadow-[1px_1px_10px] group-hover:shadow-green-400 duration-200">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="rounded-ee-xl rounded-ss-xl"
                />
              </div>
              <div className="p-5 max-lg:p-2 max-xl:p-3 max-md:p-1">
                <h4 className="text-4xl mb-2 transition-all cursor-pointer font-extrabold text-green-300 group-hover:text-green-400 group-hover:underline group-hover:scale-105 max-xl:text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg">
                  {title}
                </h4>
                <p className="text-white text-lg max-md:text-base">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Certificates;
