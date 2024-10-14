import React from "react";
import Link from "next/link";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const ProjectCard = ({ company, year, title, results, image, link }) => {
  return (
    <div className="relative px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 bg-white/15 outline outline-2 outline-white/20 rounded-xl overflow-hidden ">
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        <div className="lg:pb-16">
          <div className="bg-gradient-to-r from-emerald-500 to-sky-300 text-transparent bg-clip-text inline-flex gap-2 font-bold uppercase tracking-widest">
            <span>{company}</span>
            <span>&bull;</span>
            <span>{year}</span>
          </div>
          <h1 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 ">
            {title}
          </h1>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5 " />
          <ul className="flex flex-col gap-4 mt-4 md:mt-5 ">
            {results.map((result, index) => (
              <li
                key={index}
                className="flex gap-2 text-sm md:text-base text-white/50 "
              >
                <CheckCircleIcon className="size-5" />
                <span>{result.title}</span>
              </li>
            ))}
          </ul>
          <Link href={link} className="">
            <button className="inline-flex items-center justify-center gap-2 bg-white mt-8 text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold ">
              <span>View Project</span>
              <ArrowUpIcon className="size-4 md:size-6 animate-bounce" />
            </button>
          </Link>
        </div>
        <div className="relative">
          <Image
            src={image}
            alt={title}
            className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none "
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
