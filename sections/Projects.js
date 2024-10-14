import React from "react";
import darksaaslandingpage from "@/assets/images/dark-saas-landing-page.png";
import aistartuplandingpage from "@/assets/images/ai-startup-landing-page.png";
import lightsaaslandingpage from "@/assets/images/light-saas-landing-page.png";
import Link from "next/link";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";

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
    <div className="pb-16 lg:py-24 px-3 lg:max-w-5xl mx-auto">
      <SectionHeader
        eyebrow="Real World Results"
        description="See how i transform concepts into engaging digital experiences."
        title="Featured Projects"
      />

      <div className="container mx-auto md:mt-20 mt-10 flex flex-col gap-20 ">
        {projectsData.map((project, index) => (
          <div key={index}>
            <ProjectCard
              company={project.company}
              year={project.year}
              title={project.title}
              results={project.results}
              image={project.image}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
