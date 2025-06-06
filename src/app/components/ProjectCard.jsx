import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";

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
  return (
    <>
      <div className="relative bg-gradient-to-tr from-black via-gray-900 to-black flex group flex-col rounded-se-xl rounded-es-xl p-4 transition-all shadow-[1px_1px_10px] hover:shadow-rose-500 hover:-translate-y-2 hover:rounded-se-none hover:rounded-es-none hover:rounded-ee-xl hover:rounded-ss-xl">
        <div className="w-full h-48 relative overflow-hidden mb-4 transition-all group-hover:opacity-50 group-hover:scale-105 duration-200">
          <Image
            src={img}
            alt={alt}
            fill
            className="rounded-ee-xl rounded-ss-xl object-cover"
          />
        </div>
        <div className="absolute bg-rose-500 flex left-0 top-0 p-2 w-full rounded-ss-xl transition-all group-hover:opacity-100 opacity-0">
          <p className="text-white text-sm font-extrabold rounded-ss-xl w-full tracking-widest p-2 ">
            {tech_stacks}
          </p>
          <div className="flex flex-col rounded-es-xl items-center justify-center gap-2">
            {githubLink && (
              <Link
                href={githubLink}
                className="rounded-full flex items-center bg-teal-500 p-1.5 hover:text-white justify-center cursor-pointer transition-all hover:scale-110 duration-200"
                target="_blank"
              >
                <FaGithub className="text-xl  hover:scale-115 transition-all duration-200" />
              </Link>
            )}
            {deployedLink && (
              <Link
                href={deployedLink}
                className="rounded-full flex items-center bg-teal-500 p-1.5 hover:text-white justify-center cursor-pointer transition-all hover:scale-110 duration-200"
                target="_blank"
              >
                <FaLink className="text-xl hover:scale-115 transition-all duration-200" />
              </Link>
            )}
          </div>
        </div>

        <div className="p-2">
          <h3 className="text-2xl mb-2 uppercase transition-all font-extrabold text-rose-300 group-hover:text-red-400 duration-200 ">
            {title}
          </h3>
          <span className="text-xl text-teal-300 font-bold tracking-wider">
            {type}
          </span>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
