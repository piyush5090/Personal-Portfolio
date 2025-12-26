import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ICONS */
import {
  SiJavascript, SiCplusplus, SiMysql, SiMongodb,
  SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiRedux,
  SiGithub, SiGit, SiJsonwebtokens, SiPostman, SiFigma
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { TbLetterC } from "react-icons/tb";
import { BsCodeSlash } from "react-icons/bs";
import { MdExtension } from "react-icons/md";

const skills = [
  /* LANGUAGES & DB */
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
  { name: "C", icon: TbLetterC, color: "#283593" },
  { name: "C++", icon: SiCplusplus, color: "#6296CC" },
  { name: "SQL", icon: SiMysql, color: "#00758F" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },

  /* FRONTEND */
  { name: "React.js", icon: SiReact, color: "#61DBFB" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  
  /* BACKEND */
  { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "REST APIs", icon: BsCodeSlash, color: "#FFFFFF" },
  { name: "JWT Auth", icon: SiJsonwebtokens, color: "#000000" },

  /* TOOLS */
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },

  /* OTHER */
  { name: "Automation / Extensions", icon: MdExtension, color: "#4285F4" },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="py-24 sm:py-32 overflow-hidden" id="skills">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-xl leading-7">My Tech Stack</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Skills
          </p>
        </div>

        {/* INFINITE LOOP CAROUSEL */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-loop-scroll">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="min-w-[140px] mx-4 bg-base-200 rounded-xl shadow-md 
                           ring-1 ring-base-300 p-5 flex flex-col items-center 
                           justify-center hover:scale-105 transition-transform 
                           duration-300 cursor-default"
              >
                <skill.icon className="h-10 w-10 mb-3" style={{ color: skill.color }} />
                <p className="font-semibold text-center whitespace-nowrap">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
