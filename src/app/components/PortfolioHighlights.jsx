"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaBriefcase } from "react-icons/fa";
import { experience } from "../data/experience";
import { myProjects } from "../data/projects-data";

function ProjectThumbnail({ project }) {
  const [showImage, setShowImage] = useState(Boolean(project.img));

  return (
    <div className="relative h-36 overflow-hidden bg-slate-900/70 max-md:h-44">
      {showImage ? (
        <Image
          src={project.img}
          alt={project.alt || project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          onError={() => setShowImage(false)}
        />
      ) : (
        <Image
          src="/assets/icons/project.png"
          alt={project.title}
          width={84}
          height={84}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70"
        />
      )}
    </div>
  );
}

export default function PortfolioHighlights({ showExperience = true }) {
  const featuredProjects = [
    myProjects["Web Development"]["FullStack || MERN"][0],
    myProjects["Web Development"]["FullStack || MERN"][1],
    myProjects["Web Development"]["FullStack || MERN"][2],
  ].filter(Boolean);

  const latestExperience = experience[0];

  return (
    <section className="mx-8 mb-10 max-md:mx-3 max-md:mb-6">
      {showExperience && latestExperience && (
        <div className="mb-8 rounded-xl border border-white/15 bg-white/[0.04] p-5 shadow-[1px_1px_10px] shadow-white/20 max-md:p-4">
          <div className="mb-4 flex items-center justify-between gap-3 max-md:items-start">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500 text-white">
                <FaBriefcase />
              </div>
              <div>
                <p className="text-sm uppercase text-cyan-300">Latest role</p>
                <h2 className="text-xl font-extrabold text-rose-300 max-md:text-lg">
                  {latestExperience.role} at {latestExperience.company}
                </h2>
              </div>
            </div>
            <Link
              href="/experience"
              className="flex shrink-0 items-center gap-2 text-sm font-bold text-cyan-300 hover:text-white"
            >
              View experience <FaArrowRight />
            </Link>
          </div>
          <p className="text-white/85">{latestExperience.description}</p>
        </div>
      )}

      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase text-cyan-300">Selected work</p>
          <h2 className="text-2xl font-extrabold text-rose-300 max-md:text-xl">
            Featured Projects
          </h2>
        </div>
        <Link
          href="/projects"
          className="flex shrink-0 items-center gap-2 text-sm font-bold text-cyan-300 hover:text-white"
        >
          View all <FaArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-lg border border-white/15 bg-white/[0.04] shadow-[1px_1px_10px] shadow-white/20 transition-all hover:-translate-y-1 hover:shadow-rose-400/50"
          >
            <ProjectThumbnail project={project} />
            <div className="p-4">
              <h3 className="mb-2 text-lg font-extrabold text-rose-300">
                {project.title}
              </h3>
              <p className="line-clamp-3 text-sm leading-relaxed text-slate-200">
                {project.description}
              </p>
              <div className="mt-4 flex gap-3">
                {project.deployedLink && (
                  <Link
                    href={project.deployedLink}
                    target="_blank"
                    className="rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-bold text-white hover:bg-cyan-400"
                  >
                    Live
                  </Link>
                )}
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="rounded-md border border-white/30 px-3 py-1.5 text-sm font-bold text-white hover:border-rose-400 hover:text-rose-300"
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between gap-6 rounded-xl border border-cyan-400/40 bg-cyan-950/30 px-6 py-5 max-md:flex-col max-md:items-start max-md:px-4">
        <div>
          <p className="text-sm uppercase text-cyan-300">Have a role or project?</p>
          <h2 className="text-xl font-extrabold text-white max-md:text-lg">
            Let&apos;s build something useful together.
          </h2>
        </div>
        <Link
          href="/contact"
          className="flex shrink-0 items-center gap-2 rounded-md bg-rose-500 px-5 py-2.5 font-extrabold text-white shadow-[0_0_12px] shadow-rose-500/50 hover:bg-rose-400"
        >
          Contact me <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}
