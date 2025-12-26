import { useRef, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    name: "FairShare",
    href: "https://fairshare-tau.vercel.app/",
    github: "https://github.com/piyush5090/FairShare-V2",
    imageSrc: "../fairsharelogo.png",
    used: "MERN, TailwindCSS, Nodemailer",
    description: "Group trip expense splitting & settlement automation. A Progressive Web Application with UI focused on mobile devices.",
  },
  {
    id: 2,
    name: "My-memos",
    href: "https://mymemoshome.netlify.app/",
    github: "https://github.com/piyush5090/My-memos",
    imageSrc: "../mymemoslogo.png",
    used: "MERN, JWT, Nodemailer",
    description: "Personal + group notes with authentication & collaboration.",
  },
  {
    id: 3,
    name: "FetchX Backend",
    href: "https://github.com/piyush5090/FetchX-suit",
    github: "https://github.com/piyush5090/FetchX-suit",
    imageSrc: "../fetchxlogo.png",
    used: "NodeJS, Express, REST APIs",
    description:
      "Unified media API that aggregates stock media from Unsplash, Pexels & Pixabay via one endpoint.",
  },
  {
    id: 4,
    name: "Flux by FetchX (Chrome Extension)",
    href: "https://github.com/piyush5090/FetchX-suit",
    github: "https://github.com/piyush5090/FetchX-suit",
    imageSrc: "../fluxlogo.png",
    used: "JavaScript, Chrome APIs",
    description:
      "Chrome extension built over FetchX Backend to bulk download stock media with pause/resume.",
  },
  {
    id: 5,
    name: "Nexus-web by FetchX",
    href: "https://nexus-web-steel.vercel.app/",
    github: "https://github.com/piyush5090/FetchX-suit",
    imageSrc: "../nexuslogo.png",
    used: "React, Redux Toolkit, TailwindCSS",
    description:
      "Unified marketplace built over FetchX Backend to search & download stock photos & videos.",
  },

  // ----------- UPCOMING PROJECTS -----------
  {
    id: 6,
    name: "Synapse (Upcoming)",
    href: "#",
    github: "#",
    imageSrc: "../synapselogo.jpeg",
    used: "React, Node, PostgreSQL, Tailwind, Gemini, Stable Diffusion",
    description: "AI Marketing Co-pilot — from idea to published campaign.",
    comingSoon: true,
  },
];

export default function Projects() {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const scrollLeft = () =>
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });

  const scrollRight = () =>
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });

  return (
    <div id="projects" className="py-24 sm:py-32">
      <div className="mx-auto text-center max-w-7xl px-6">
        <h2 className="text-lg leading-7">Browse my recent</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Projects
        </p>

        {/* Scroll Buttons */}
        <div className="flex justify-end gap-2 mt-6">
          <button onClick={scrollLeft} className="btn btn-square btn-outline">
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button onClick={scrollRight} className="btn btn-square btn-outline">
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Horizontal Scroll List */}
        <div
          ref={scrollRef}
          className="mt-10 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-5 no-scrollbar"
          data-aos="fade-up"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative snap-center min-w-[290px] bg-base-200 ring-2 ring-base-300 rounded-2xl shadow-xl hover:scale-[1.02] transition"
            >
              {/* Coming Soon */}
              {project.comingSoon && (
                <span className="absolute top-3 right-3 bg-yellow-400 text-black px-3 py-1 text-xs font-bold rounded-xl z-10">
                  COMING SOON 🚀
                </span>
              )}

              {/* IMAGE + HOVER OVERLAY */}
              <div className="relative group">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="rounded-t-2xl h-52 w-full object-cover transition duration-300 group-hover:brightness-75"
                />

                {/* SHOW OVERLAY ONLY IF NOT UPCOMING */}
                {!project.comingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
                    <a
                      href={project.href}
                      target="_blank"
                      className="bg-black/70 text-white px-4 py-2 rounded-lg font-semibold text-sm"
                    >
                      LIVE
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="bg-black/70 text-white px-4 py-2 rounded-lg font-semibold text-sm"
                    >
                      GITHUB
                    </a>
                  </div>
                )}
              </div>

              {/* DETAILS */}
              <div className="p-4 text-left">
                <h3 className="text-lg font-bold">{project.name}</h3>
                <p className="mt-1 mb-3 text-sm">{project.description}</p>
                <p className="text-sm font-medium opacity-80">{project.used}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="btn btn-outline">View More</button>
        </div>
      </div>
    </div>
  );
}
