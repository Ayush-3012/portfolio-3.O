"use client";

import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaCode } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
} from "react-icons/si";
import { useState, useEffect } from "react";

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const RandomIcon = () => {
  const iconsList = [
    FaReact,
    FaNodeJs,
    FaPython,
    SiMongodb,
    SiCplusplus,
    SiTailwindcss,
    SiNextdotjs,
    FaGitAlt,
    FaCode,
  ];

  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const generatedIcons = iconsList.map((Icon, index) => {
      const top = `${getRandom(20, 80)}%`;
      const left = `${getRandom(20, 80)}%`;
      const bottom = `${getRandom(20, 80)}%`;
      const right = `${getRandom(20, 80)}%`;
      const rotate = getRandom(-30, 30);
      return {
        IconComponent: Icon,
        key: index,
        style: {
          top: top,
          left: left,
          bottom: bottom,
          right: right,
          transform: `rotate(${rotate}deg)`,
        },
      };
    });
    setIcons(generatedIcons);
  }, []);

  return (
    <>
      {icons.map(({ IconComponent, key, style }) => (
        <IconComponent
          key={key}
          style={style}
          className={`text-[50px] text-slate-500 absolute z-0 opacity-100 animate-pulse`}
        />
      ))}
    </>
  );
};

export default RandomIcon;
