import Image from "next/image";
import { myProjects } from "../data/projects-data";
import { FaGithub, FaLink } from "react-icons/fa";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-extrabold text-rose-300 shadow-[1px_1px_10px] shadow-rose-500 rounded-xl px-4 py-2 w-fit my-4">
          My Projects
        </h1>
      </div>
      <div className="p-4 grid grid-cols-3 gap-5 mx-10 my-4 overflow-y-auto h-[80%]">
        {myProjects.map(
          (
            {
              title,
              img,
              alt,
              tech_stacks,
              githubLink,
              deployedLink,
              type,
              description,
            },
            index
          ) => (
            <div
              key={index}
              className="relative bg-gradient-to-tr from-emerald-400 via-slate-950 to-emerald-400 flex group flex-col rounded-se-xl rounded-es-xl p-4 transition-all shadow-[1px_1px_10px] hover:shadow-rose-500 hover:-translate-y-2 hover:rounded-se-none hover:rounded-es-none hover:rounded-ee-xl hover:rounded-ss-xl"
            >
              <div className="max-w-full max-h-full w-96 h-48 transition-all grayscale group-hover:grayscale-0 group-hover:opacity-50 group-hover:scale-105 duration-150">
                <Image
                  src={img}
                  alt={alt}
                  fill
                  className="rounded-ee-xl rounded-ss-xl"
                />
              </div>
              <div className="w-full h-52 absolute flex flex-col left-0 top-0 rounded-es-xl transition-all group-hover:opacity-100 opacity-0">
                <p className="text-white font-extrabold rounded-ss-xl w-full tracking-widest p-2 bg-rose-500">
                  {tech_stacks}
                </p>
                <div className="flex h-48 rounded-es-xl items-center justify-center gap-6">
                  {githubLink && (
                    <Link
                      href={githubLink}
                      className="bg-gradient-to-tr from-rose-500 via-white to-rose-500 rounded-xl w-16 h-16 flex items-center hover:text-rose-500 justify-center cursor-pointer transition-all  hover:scale-110 duration-150"
                      target="_blank"
                    >
                      <FaGithub className="text-4xl  text-black-400 my-4 hover:scale-110 transition-all" />
                    </Link>
                  )}
                  {deployedLink && (
                    <Link
                      href={deployedLink}
                      className="bg-gradient-to-tl from-rose-500 via-white to-rose-500 rounded-xl w-16 h-16 flex items-center justify-center cursor-pointer transition-all hover:text-rose-500 hover:scale-110 duration-150"
                      target="_blank"
                    >
                      <FaLink className="text-4xl text-black-400 my-4  hover:scale-110 transition-all" />
                    </Link>
                  )}
                </div>
              </div>

              <div className="p-2">
                <h3 className=" text-4xl mb-2 transition-all  font-extrabold text-rose-300 group-hover:text-red-400 group-hover:underline group-hover:scale-105">
                  {title}
                </h3>
                <span className="text-4xl text-teal-300 font-bold tracking-wider">
                  {type}
                </span>
                <p className="text-white font-extrabold">{description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Projects;
