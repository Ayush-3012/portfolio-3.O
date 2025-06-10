"use client";
import { myProjects } from "../data/projects-data";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import RandomIcon from "../components/RandomIcon";

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
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.6 }}
      >
        <div className="flex items-center justify-center mx-10 ">
          <h1 className="text-4xl uppercase underline font-extrabold text-rose-300 shadow-[1px_1px_10px] shadow-rose-500 rounded-xl px-4 py-2 w-fit my-4">
            My Projects
          </h1>
        </div>

        <div className="flex flex-col p-2 gap-2 h-full">
          <RandomIcon />
          <div className="flex justify-around gap-2  items-center">
            <motion.div
              className="flex flex-col w-fit flex-wrap gap-2 justify-center"
              initial={{ y: -800 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                type: "spring",
                bounce: 0.6,
              }}
            >
              {Object.keys(myProjects).map((category) => (
                <motion.div
                  key={category}
                  className={`cursor-pointer px-4 py-1 rounded-lg text-white text-xl bg-indigo-400 items-center justify-center flex hover:bg-purple-500 ${
                    selectedCategory === category && "bg-rose-500"
                  }`}
                  onClick={() => handleCategoryClick(category)}
                  whileHover={{
                    translateX: "8px",
                    scaleX: 1.04,
                    transition: { duration: 1, type: "spring", bounce: 0.6 },
                  }}
                >
                  {category}
                </motion.div>
              ))}
            </motion.div>

            {selectedCategory && (
              <motion.div
                className="flex flex-wrap flex-1 gap-4 border-l-2 border-white justify-center"
                initial={{ y: 800 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 1,
                  type: "spring",
                  bounce: 0.6,
                }}
              >
                {Object.keys(myProjects[selectedCategory]).map((subCat) => (
                  <motion.div
                    key={subCat}
                    className={`cursor-pointer px-2 py-0.5 rounded-lg text-lg  flex justify-center items-center text-white bg-cyan-500 hover:bg-fuchsia-400 ${
                      selectedSubCategory === subCat && "bg-rose-500"
                    }`}
                    onClick={() => handleSubCategoryClick(subCat)}
                    whileHover={{
                      translateY: "-6px",
                      scaleX: 1.04,
                      transition: { duration: 1, type: "spring", bounce: 0.6 },
                    }}
                  >
                    {subCat}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
          <div className="overflow-y-auto border-t-2 border-white my-2 mx-4 h-[500px]">
            {selectedCategory && selectedSubCategory && (
              <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-6 mt-4 mx-4">
                {myProjects[selectedCategory][selectedSubCategory].map(
                  (project) => (
                    <ProjectCard key={project.title} {...project} />
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
