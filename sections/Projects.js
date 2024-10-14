import React from "react";
import darksaaslandingpage from "@/assets/images/dark-saas-landing-page.png";
import aistartuplandingpage from "@/assets/images/ai-startup-landing-page.png";
import lightsaaslandingpage from "@/assets/images/light-saas-landing-page.png";
import Link from "next/link";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const Projects = () => {
  const projectsData = [
    {
      company: "Google",
      year: 2020,
      title: "Dark Saas Landing Page",
      results: [
        { title: "Enhanced user experience by 40%" },
        { title: "Improved site speed by 50%" },
        { title: "Increased mobile traffic by 30%" },
      ],
      image: darksaaslandingpage,
      link: darksaaslandingpage,
    },
    {
      company: "Google",
      year: 2024,
      title: "Ai Startup Landing Page",
      results: [
        { title: "Enhanced user experience by 40%" },
        { title: "Improved site speed by 50%" },
        { title: "Increased mobile traffic by 30%" },
      ],
      image: aistartuplandingpage,
      link: aistartuplandingpage,
    },
    {
      company: "Google",
      year: 2021,
      title: "Light Saas Landing Page",
      results: [
        { title: "Enhanced user experience by 40%" },
        { title: "Improved site speed by 50%" },
        { title: "Increased mobile traffic by 30%" },
      ],
      image: lightsaaslandingpage,
      link: lightsaaslandingpage,
    },
  ];

  return (
    <div className="pb-16 lg:py-24 px-3">
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-500 to-sky-300 text-transparent bg-clip-text ">
          Real World Results
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 mt-10 max-w-sm mx-auto">
        <h1 className="font-medium text-3xl md:text-5xl text-center font-serif ">
          Featured Projects
        </h1>
        <p className="text-center md:text-lg lg:text-xl text-white/60 ">
          See how i transform concepts into engaging digital experiences.
        </p>
      </div>
      <div className="container md:mt-20 mt-10 flex flex-col gap-20 ">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="relative px-8 pt-8 md:pt-12 md:px-10 bg-white/15 outline outline-2 outline-white/20 rounded-xl overflow-hidden "
          >
            <div
              className="absolute inset-0 -z-10 opacity-5"
              style={{
                backgroundImage: `url(${grainImage.src})`,
              }}
            ></div>

            <div className="flex flex-col">
              <div className="bg-gradient-to-r from-emerald-500 to-sky-300 text-transparent bg-clip-text inline-flex gap-2 font-bold uppercase tracking-widest">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <h1 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 ">
                {project.title}
              </h1>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5 " />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5 ">
                {project.results.map((result, index) => (
                  <li
                    key={index}
                    className="flex gap-2 text-sm md:text-base text-white/50 "
                  >
                    <CheckCircleIcon className="size-5" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <Link href={project.link} className="">
                <button className="inline-flex items-center justify-center gap-2 bg-white mt-8 text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold ">
                  <span>View Project</span>
                  <ArrowUpIcon className="size-4 md:size-6 animate-bounce" />
                </button>
              </Link>
            </div>
            <div>
              <Image
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-4 md:-mb-0"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
