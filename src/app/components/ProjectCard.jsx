import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({
  title,
  img,
  alt,
  type,
  tech_stacks,
  githubLink,
  deployedLink,
  description,
}) => {
  const MotionLink = motion(Link);

  return (
    <>
      <motion.div
        className="relative turret-font shadow-white flex group flex-col rounded-se-xl rounded-es-xl p-4 shadow-[0px_0px_10px] hover:shadow-rose-500 hover:-translate-y-2 hover:rounded-se-none hover:rounded-es-none hover:rounded-ee-xl hover:rounded-ss-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.6 }}
        whileHover={{
          translateY: "-6px",
          transition: { duration: 1, type: "spring", bounce: 0.6 },
        }}
      >
        <div className="w-full h-48 rounded-ee-xl rounded-ss-xl relative overflow-hidden mb-4  group-hover:opacity-50 group-hover:scale-105 duration-150 group-hover:shadow-[0_0_10px] group-hover:shadow-white transition-all">
          <Image src={img} alt={alt} fill className=" object-cover " />
        </div>
        <div className="absolute bg-rose-500 flex left-0 top-0 p-2 w-full rounded-ss-xl group-hover:opacity-100 opacity-0">
          <p className="text-white text-sm font-extrabold rounded-ss-xl w-full tracking-widest p-2 ">
            {tech_stacks}
          </p>
          <div className="flex flex-col rounded-es-xl items-center justify-center gap-2">
            {githubLink && (
              <MotionLink
                href={githubLink}
                className="rounded-full flex items-center bg-teal-500 p-1.5 hover:text-white justify-center cursor-pointer hover:scale-110"
                target="_blank"
                whileHover={{
                  translateY: "-3px",
                  scaleX: 1.04,
                  transition: { duration: 0.6, type: "spring", bounce: 0.6 },
                }}
              >
                <FaGithub className="text-xl" />
              </MotionLink>
            )}
            {deployedLink && (
              <MotionLink
                href={deployedLink}
                className="rounded-full flex items-center bg-teal-500 p-1.5 hover:text-white justify-center cursor-pointer  hover:scale-110"
                target="_blank"
                whileHover={{
                  translateY: "-3px",
                  scaleX: 1.04,
                  transition: { duration: 0.6, type: "spring", bounce: 0.6 },
                }}
              >
                <FaLink className="text-xl hover:scale-115" />
              </MotionLink>
            )}
          </div>
        </div>

        <div className="p-2">
          <h3 className="text-2xl mb-2 uppercase font-extrabold text-rose-300 group-hover:text-3xl group-hover:text-red-400 duration-200 transition-all">
            {title}
          </h3>
          <span className="text-xl text-teal-300 font-bold tracking-wider">
            {type}
          </span>
          <p className="text-white">{description}</p>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
