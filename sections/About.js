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
      left: "5%",
      top: "5%",
    },
    {
      title: "Gaming",
      image: "🎮",
      left: "10%",
      top: "35%",
    },
    {
      title: "Hiking",
      image: "🥾",
      left: "35%",
      top: "40%",
    },
    {
      title: "Music",
      image: "🎵",
      left: "70%",
      top: "45%",
    },
    {
      title: "Reading",
      image: "📚",
      left: "45%",
      top: "70%",
    },
    {
      title: "Fitness",
      image: "🏋️",
      left: "5%",
      top: "65%",
    },
    {
      title: "Photography",
      image: "📷",
      left: "50%",
      top: "5%",
    },
    {
      title: "Cooking",
      image: "🫕",
      left: "50%",
      top: "25%",
    },
  ];
  return (
    <div id="about" className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do and what inspires me."
      />

      <div className="mt-20 mx-auto">
        <Card className={`max-w-4xl bg-[#1E1D1C]/20 h-[320px] mx-auto`}>
          <div className="intro flex items-center justify-center gap-20 py-8 ">
            <div className="max-w-md space-y-3">
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
              <div className="absolute bg-purple-900/50 rounded-full blur-3xl h-[200px] w-[200px] md:h-[300px] md:w-[300px] -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
              <div className="size-40 md:size-60 rounded-full ">
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

        <Card className={`max-w-md `}>
          <div className="py-6 px-6">
            <h1 className="text-3xl font-serif font-medium text-center">
              My Hobbies
            </h1>
            <p className="text-white/50 text-center ">
              Explore my interests and hobbies beyond the digital realm.
            </p>
          </div>
          <div ref={dragRef} className="relative flex-1 max-w-3xl h-[320px]">
            {Hobbies.map((hobby, index) => (
              <motion.div
                drag
                dragConstraints={dragRef}
                key={index}
                className=" absolute text-black/80 h-10 inline-flex items-center gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl px-6 py-1.5"
                style={{
                  left: hobby.left,
                  top: hobby.top,
                }}
              >
                <span className="font-medium text-gray-950">{hobby.title}</span>
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
