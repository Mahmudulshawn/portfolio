import Image from "next/image";
import React from "react";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import HeroOrbit from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

const Hero = () => {
  return (
    <div className=" py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      {/* stars and the orbits around the hero section */}
      <div className="absolute inset-0 masked-div">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={0}>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
      </div>

      <div className="container min-w-[100vw] flex justify-center items-center">
        <div className="">
          <div className="flex flex-col items-center ">
            <Image
              src={memojiImage}
              className="size-[100px]"
              alt="man with a laptop"
            />
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg ">
              <div className="bg-green-500 size-3 absolute rounded-full animate-ping "></div>
              <div className="bg-green-500 size-2.5 rounded-full "></div>
              <div className="text-sm font-medium">Available for new project</div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-8 max-w-lg mx-auto">
            <div className="text-3xl md:text-5xl font-serif font-medium tracking-wide">
              Mahmudul Shawn
            </div>
            <p className="text-white/60 mt-4 text-center md:text-lg">
              I am a web-developer from bangladesh. I specialize in transforming
              designs into functional, high-performing web applications. lets
              discuss our next project.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <button className="inline-flex items-center gap-2 px-6 h-12 border border-white/15 rounded-xl">
              <span className="font-semibold">Download CV</span>
              <ArrowDown className="size-4 animate-bounce" />
            </button>
            <div className="">
              <button className="bg-white animate-pulse text-gray-900 inline-flex items-center gap-2 px-6 h-12 border border-white rounded-xl">
                <div>👋</div>
                <span className="font-semibold">Lets Connect</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;