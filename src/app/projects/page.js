"use client";
import { myProjects } from "../data/projects-data";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");
  const [selectedSubCategory, setSelectedSubCategory] = useState("MERN Stack");

  const handleCategoryClick = (category) => {
    setSelectedSubCategory(null);
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  const handleSubCategoryClick = (subcategory) => {
    setSelectedSubCategory((prev) =>
      prev === subcategory ? null : subcategory
    );
  };

  return (
    <>
      <div className="flex items-center justify-center mx-10 ">
        <h1 className="text-4xl font-extrabold text-rose-300 shadow-[1px_1px_10px] shadow-rose-500 rounded-xl px-4 py-2 w-fit my-4">
          My Projects
        </h1>
      </div>

      <div className="flex flex-col p-2 gap-2 h-full">
        <div className="flex justify-around gap-2  items-center">
          <div className="flex flex-col w-fit flex-wrap gap-2 justify-center">
            {Object.keys(myProjects).map((category) => (
              <div
                key={category}
                className={`cursor-pointer px-4 py-1 rounded-lg hover:translate-x-2 duration-150 transition-all text-white text-xl bg-indigo-400 items-center justify-center flex hover:bg-purple-500 ${
                  selectedCategory === category && "bg-rose-500"
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </div>
            ))}
          </div>

          {selectedCategory && (
            <div className="flex flex-wrap flex-1 gap-4 border-l-2 border-white justify-center">
              {Object.keys(myProjects[selectedCategory]).map((subCat) => (
                <div
                  key={subCat}
                  className={`cursor-pointer px-2 py-0.5 rounded-lg text-lg hover:scale-x-110 duration-150 transition-all flex justify-center items-center text-white bg-cyan-500 hover:bg-fuchsia-400 ${
                    selectedSubCategory === subCat && "bg-rose-500"
                  }`}
                  onClick={() => handleSubCategoryClick(subCat)}
                >
                  {subCat}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="overflow-y-auto border-t-2 border-white my-2 mx-4 h-[70%]">
          {selectedCategory && selectedSubCategory && (
            <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-6 mt-4">
              {myProjects[selectedCategory][selectedSubCategory].map(
                (project) => (
                  <ProjectCard key={project.title} {...project} />
                )
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
