import { FaLocationDot } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLanguage,
  FaLinkedin,
} from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-extrabold text-rose-300 shadow-[1px_1px_10px] shadow-rose-500 rounded-xl px-4 py-2 w-fit my-4">
          Contact Me
        </h1>
      </div>
      <div className="flex flex-col gap-6 p-4 text-white item-center justify-center max-lg:flex-col ">
        <div className="flex-1 shadow-[1px_1px_10px] shadow-white rounded-xl p-4 items-center justify-center flex flex-col">
          <p className="my-4 font-bold self-start">
            Thanks For Visiting, <span className="text-[#00fff5]">Adios !</span>
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="https://www.instagram.com/ayush.kumar_3012/"
              target="_blank"
              className="p-4 group rounded-xl hover:bg-rose-500 hover:text-cyan-400 hover:scale-110 transition-all duration-150 text-white"
            >
              <FaInstagramSquare className="text-4xl group-hover:scale-110 duration-150 transition-all " />
            </Link>
            <Link
              href="https://github.com/Ayush-3012"
              target="_blank"
              className="p-4 group rounded-xl hover:bg-rose-500 hover:text-cyan-400 hover:scale-110 transition-all duration-150 text-white"
            >
              <FaGithubSquare className="text-4xl group-hover:scale-110 duration-150 transition-all " />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ayush-kumar-6137651b4/"
              target="_blank"
              className="p-4 group rounded-xl hover:bg-rose-500 hover:text-cyan-400 hover:scale-110 transition-all duration-150 text-white"
            >
              <FaLinkedin className="text-4xl group-hover:scale-110 duration-150 transition-all " />
            </Link>
          </div>
        </div>

        <div className="flex-1 p-4 shadow-[1px_1px_10px] shadow-white h-fit rounded-xl items-center justify-center flex flex-col">
          <form className="space-y-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                placeholder="YOUR NAME"
                name="Name"
                required
                className="w-full text-white text-lg font-medium rounded-tl-3xl rounded-br-3xl px-4 py-2 focus:outline-none  shadow-[1px_1px_10px] shadow-cyan-400 focus:shadow-rose-400 focus:-translate-y-2 duration-150 transition-all"
              />
              <input
                type="email"
                placeholder="YOUR E-MAIL"
                name="Mail"
                required
                className="w-full  text-white text-lg font-medium rounded-tl-3xl rounded-br-3xl px-4 py-2 focus:outline-none  shadow-[1px_1px_10px] shadow-cyan-400 focus:shadow-rose-400 focus:-translate-y-2 duration-150 transition-all"
              />
            </div>
            <input
              type="text"
              placeholder="ENTER SUBJECT"
              name="Subject"
              required
              className="w-full  text-white text-lg font-medium rounded-tl-3xl rounded-br-3xl px-4 py-2 focus:outline-none  shadow-[1px_1px_10px] shadow-cyan-400 focus:shadow-rose-400 focus:-translate-y-2 duration-150 transition-all"
            />
            <textarea
              name="Message"
              rows="8"
              placeholder="Message Here..."
              className="w-full  text-white text-lg font-medium rounded-tl-3xl rounded-br-3xl px-4 py-2 focus:outline-none  shadow-[1px_1px_10px] shadow-cyan-400 focus:shadow-rose-400 focus:-translate-y-2 duration-150 transition-all resize-none"
            ></textarea>

            <button
              type="submit"
              className="flex cursor-pointer items-center gap-2 text-black bg-rose-500 hover:text-white hover:bg-gradient-to-tl from-black via-rose-950 to-black transition-all hover:-translate-y-2 font-semibold px-6 py-2 rounded-lg"
            >
              Send Message
              <BsFillSendFill />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
