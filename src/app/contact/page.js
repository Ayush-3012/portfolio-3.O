"use client";

import { BsFillSendFill } from "react-icons/bs";
import { motion } from "framer-motion";
import RandomIcon from "../components/RandomIcon";

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.6 }}
      >
        <div className="flex items-center justify-center">
          <h1 className="text-4xl uppercase underline font-extrabold text-rose-300 shadow-[1px_1px_10px] shadow-rose-500 rounded-xl px-4 py-2 w-fit my-4 max-md:text-3xl max-sm:text-2xl">
            Contact Me
          </h1>
        </div>
        <div className="flex w-full flex-col gap-3 p-4 text-white items-center justify-center max-lg:flex-col ">
          <p className="my-4 font-bold self-start text-2xl max-sm:text-xl">
            Thanks For Visiting, <span className="text-[#00fff5]">Adios !</span>
          </p>
          <RandomIcon />
          <motion.div
            className="p-8 w-fit shadow-[1px_1px_10px] shadow-white h-fit rounded-xl items-center justify-center flex flex-col max-md:w-full max-md:p-6 max-sm:p-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 1,
              type: "spring",
              bounce: 0.6,
            }}
          >
            <form
              action="https://formsubmit.co/011d87731e83a3193af6bef45e49efc8"
              method="POST"
              className="space-y-6  items-center justify-center flex flex-col max-sm:space-y-3"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input
                type="hidden"
                name="_next"
                value="https://portfolio-ayush3012.vercel.app/"
              />
              <input
                type="hidden"
                name="_subject"
                value="New message from your portfolio!"
              />
              <div className="flex max-md:flex-col w-full gap-4 max-sm:gap-2">
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  name="name"
                  required
                  className="w-full max-md:w-96 max-sm:w-64 text-white text-lg font-medium rounded-tl-3xl rounded-br-3xl px-4 py-2 focus:outline-none shadow-[1px_1px_10px] shadow-cyan-400 focus:shadow-rose-400 focus:-translate-y-2 duration-150 transition-all"
                />
                <input
                  type="email"
                  placeholder="YOUR E-MAIL"
                  name="email"
                  required
                  className="w-full max-md:w-96 max-sm:w-64 text-white text-lg font-medium rounded-tl-3xl rounded-br-3xl px-4 py-2 focus:outline-none  shadow-[1px_1px_10px] shadow-cyan-400 focus:shadow-rose-400 focus:-translate-y-2 duration-150 transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="ENTER SUBJECT"
                name="subject"
                required
                className="w-full max-md:w-96 max-sm:w-64 text-white text-lg font-medium rounded-tl-3xl rounded-br-3xl px-4 py-2 focus:outline-none  shadow-[1px_1px_10px] shadow-cyan-400 focus:shadow-rose-400 focus:-translate-y-2 duration-150 transition-all"
              />
              <textarea
                name="Message"
                rows="8"
                placeholder="Message Here..."
                className="w-full max-md:w-96 max-sm:w-64 text-white text-lg font-medium rounded-tl-3xl rounded-br-3xl px-4 py-2 focus:outline-none shadow-[1px_1px_10px] shadow-cyan-400 focus:shadow-rose-400 focus:-translate-y-2 duration-150 transition-all resize-none"
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
