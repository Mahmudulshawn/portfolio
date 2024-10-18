"use client";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import React, { useRef } from "react";
import profile from "@/assets/images/profile.jpg";
import Card from "@/components/Card";
import BookImage from "@/assets/images/book-cover.png";
import { motion } from "framer-motion";

const About = () => {
  const dragRef = useRef();

  const Hobbies = [
    {
      title: "Painting",
      image: "🎨",
    },
    {
      title: "Gaming",
      image: "🎮",
    },
    {
      title: "Hiking",
      image: "🥾",
    },
    {
      title: "Music",
      image: "🎵",
    },
    {
      title: "Reading",
      image: "📚",
    },
    {
      title: "Fitness",
      image: "🏋️",
    },
    {
      title: "Photography",
      image: "📷",
    },
    {
      title: "Cooking",
      image: "🫕",
    },
  ];
  return (
    <div id="about" className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do and what inspires me."
      />

      <div>
        <Card className={`max-w-5xl mt-20 bg-[#1E1D1C]/20 `}>
          <div className="intro flex items-center justify-center gap-40 py-16 ">
            <div className="max-w-lg space-y-3">
              <h1 className="text-3xl font-bold">Hello, I&apos;m</h1>
              <h1 className="text-4xl font-medium font-serif ">
                Mahmudul Alam Shawn
              </h1>
              <span className="text-white/50">
                A Passionate Software Developer
              </span>
              <p className="text-white/50">
                I excel in architecting scalable, responsive web applications
                with a focus on performance, precision, and modern design. My
                expertise bridges the gap between aesthetic appeal and
                cutting-edge functionality, delivering seamless digital
                experiences.
              </p>
            </div>
            <div className="relative">
              <div className="absolute bg-purple-900/50 rounded-full blur-3xl h-[300px] w-[300px] -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
              <div className="size-60 rounded-full ">
                <Image
                  src={profile}
                  className="rounded-full"
                  alt="profile picture"
                />
              </div>
            </div>
          </div>
        </Card>

        <Card className={`max-w-xs h-[320px]`}>
          <div className="py-5">
            <h1 className="text-3xl font-serif font-medium text-center">
              My Reads
            </h1>
            <p className="text-white/50 text-center ">
              Explore the books shaping my perspectives.
            </p>
          </div>
          <div className="w-40 mx-auto">
            <Image src={BookImage} alt="book image" />
          </div>
        </Card>

        <Card className={`max-w-3xl p-5 min-h-[22rem] `}>
          <div className="pb-6">
            <h1 className="text-3xl font-serif font-medium text-center">
              My Hobbies
            </h1>
            <p className="text-white/50 text-center ">
              Explore my interests and hobbies beyond the digital realm.
            </p>
          </div>
          <div
            ref={dragRef}
            className="flex flex-wrap gap-5 max-w-3xl min-h-[22rem]"
          >
            {Hobbies.map((hobby, index) => (
              <motion.div
                drag
                dragConstraints={dragRef}
                key={index}
                className="text-black/80 h-10 flex items-center justify-center gap-4 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl px-6 py-1.5"
              >
                <p className="font-semibold text-md">{hobby.title}</p>
                <span className="text-xl">{hobby.image}</span>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
