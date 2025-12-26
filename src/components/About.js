import { useEffect } from "react";
import {
  MapPinIcon,
  AtSymbolIcon,
  PhoneIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  LinkIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";

const contactDetails = [
  {
    name: "Email",
    description: "govindanipiyush10@gmail.com",
    icon: AtSymbolIcon,
    link: "mailto:govindanipiyush10@gmail.com",
  },
  {
    name: "Phone",
    description: "+91-7648950874",
    icon: PhoneIcon,
    link: "tel:+917648950874",
  },
  {
    name: "Location",
    description: "Ujjain, Madhya Pradesh, India",
    icon: MapPinIcon,
    link: "https://www.google.com/maps?q=Ujjain+Madhya+Pradesh",
  },
  {
    name: "LinkedIn",
    description: "linkedin.com/in/piyushgovindani",
    icon: LinkIcon,
    link: "https://linkedin.com/in/piyushgovindani",
  },
  {
    name: "GitHub",
    description: "github.com/piyushgovindani",
    icon: LinkIcon,
    link: "https://github.com/piyushgovindani",
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      {/* TITLE + SUMMARY */}
      <div className="mx-auto max-w-3xl lg:max-w-5xl lg:px-8">
        <h2 className="text-lg leading-7">
          <a href="https://sam-folio.vercel.app" target="_blank" rel="noreferrer">
            Get to know more
          </a>
        </h2>

        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          About Me
        </p>

        <p className="mt-6 text-lg leading-8" data-aos="fade-right">
          I'm <b>Piyush Govindani</b>, a passionate Full-Stack Developer who
          enjoys building real-world products. I specialize in the MERN stack,
          automation using Chrome extensions, and scalable REST APIs. I thrive
          in collaborative environments where innovation and problem-solving
          shape the product journey. I actively contribute to open projects,
          guide peers, and continuously sharpen my problem-solving skills.
        </p>
      </div>

      {/* IMAGE */}
      <div
        className="mt-16 lg:mt-24 flex justify-center"
        data-aos="fade-left"
      >
        <img
          className="w-[38rem] max-w-none rounded-xl shadow-xl ring-2 ring-base-300 sm:w-[57rem]"
          src="../back.jpg"
          alt="Piyush Image"
        />
      </div>

      {/* EXPERIENCE + CONTACT DETAILS */}
      <div className="mx-auto max-w-3xl lg:max-w-5xl lg:px-8 mt-20">
        <div className="grid gap-x-6 sm:grid-cols-2">
          
          {/* EXPERIENCE */}
          <div
            className="ring-2 ring-base-300 bg-base-200 rounded-2xl p-6 shadow-xl"
            data-aos="zoom-in"
          >
            <BriefcaseIcon className="h-6 w-6 mx-auto" />
            <h2 className="text-2xl text-center font-bold tracking-tight">
              Experience
            </h2>

            <p className="mt-4 font-semibold">Full Stack Developer Intern — Bhairavi Technologies (2025)</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Built scalable enterprise modules in MERN</li>
              <li>Developed automation tools using Chrome extensions</li>
              <li>Worked in agile teams & deployment workflows</li>
            </ul>

            <p className="mt-4 font-semibold">Full Stack Intern — GNCIPL (2025)</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Developed full-stack applications from scratch</li>
              <li>Enhanced UI performance & user interactions</li>
            </ul>
          </div>

          {/* CONTACT DETAILS — replaces education */}
          <div
            className="ring-2 ring-base-300 bg-base-200 rounded-2xl p-6 shadow-xl"
            data-aos="zoom-in"
          >
            <AcademicCapIcon className="h-6 w-6 mx-auto" />
            <h2 className="text-2xl text-center font-bold tracking-tight">
              Contact Details
            </h2>

            <dl className="mt-6 space-y-4">
              {contactDetails.map((item) => (
                <div key={item.name} className="relative pl-9">
                  <dt className="font-semibold inline-flex items-center gap-2">
                    <item.icon className="absolute left-1 top-1 h-5 w-5" />
                    {item.name}:
                  </dt>{" "}
                  <dd className="inline">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:opacity-70"
                    >
                      {item.description}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
