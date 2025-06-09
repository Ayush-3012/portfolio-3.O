"use client";

import { BsFillSendFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.6 }}
      >
        <div className="flex items-center justify-center">
          <h1 className="text-4xl uppercase underline font-extrabold text-rose-300 shadow-[1px_1px_10px] shadow-rose-500 rounded-xl px-4 py-2 w-fit my-4">
            Contact Me
          </h1>
        </div>
        <div className="flex w-full flex-col gap-3 p-4 text-white items-center justify-center max-lg:flex-col ">
          <p className="my-4 font-bold self-start text-2xl">
            Thanks For Visiting, <span className="text-[#00fff5]">Adios !</span>
          </p>

          <motion.div
            className="p-8 w-fit shadow-[1px_1px_10px] shadow-white h-fit rounded-xl items-center justify-center flex flex-col"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 1,
              type: "spring",
              bounce: 0.6,
            }}
          >
            <form className="space-y-6 items-center justify-center flex flex-col">
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  required
                  className="w-fulltext-white text-lg font-medium rounded-tl-3xl rounded-br-3xl px-4 py-2 focus:outline-none shadow-[1px_1px_10px] shadow-cyan-400 focus:shadow-rose-400 focus:-translate-y-2 duration-150 transition-all"
                />
                <input
                  type="email"
                  placeholder="YOUR E-MAIL"
                  required
                  className="w-full text-white text-lg font-medium rounded-tl-3xl rounded-br-3xl px-4 py-2 focus:outline-none  shadow-[1px_1px_10px] shadow-cyan-400 focus:shadow-rose-400 focus:-translate-y-2 duration-150 transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="ENTER SUBJECT"
                required
                className="w-full text-white text-lg font-medium rounded-tl-3xl rounded-br-3xl px-4 py-2 focus:outline-none  shadow-[1px_1px_10px] shadow-cyan-400 focus:shadow-rose-400 focus:-translate-y-2 duration-150 transition-all"
              />
              <textarea
                name="Message"
                rows="8"
                placeholder="Message Here..."
                className="w-full text-white text-lg font-medium rounded-tl-3xl rounded-br-3xl px-4 py-2 focus:outline-none shadow-[1px_1px_10px] shadow-cyan-400 focus:shadow-rose-400 focus:-translate-y-2 duration-150 transition-all resize-none"
              ></textarea>

              <motion.button
                type="submit"
                className="flex cursor-pointer items-center gap-2 shadow-white shadow-[0_0_10px] text-white font-semibold px-6 py-2 rounded-lg hover:shadow-cyan-400"
                whileHover={{
                  translateX: "-3px",
                  scale: 1.08,
                  transition: { duration: 0.6, type: "spring", bounce: 0.6 },
                }}
              >
                Send Message
                <BsFillSendFill />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
