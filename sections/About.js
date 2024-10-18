"use client";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import React from "react";
import profile from "@/assets/images/profile.jpg";
import Card from "@/components/Card";
import BookImage from "@/assets/images/book-cover.png";

const About = () => {
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
        <div>
          <Card className={`max-w-xs`}>
            <div className="py-5">
              <h1 className="text-3xl font-serif font-medium text-center">
                My Reads
              </h1>
              <p className="text-white/50 text-center ">
                Explore the books shaping my perspectives.
              </p>
            </div>
            <div className="size-44 mx-auto">
              <Image src={BookImage} alt="book image" />
            </div>
          </Card>
        </div>
        <div className="">
          <Card className={`max-w-3xl p-5`}>
            <div className="pb-5">
              <h1 className="text-3xl font-serif font-medium text-center">
                My Hobbies
              </h1>
              <p className="text-white/50 text-center ">
                Explore my interests and hobbies beyond the digital realm.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 max-w-3xl min-h-3xl">
              {Hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="text-black/80 flex items-center justify-center gap-4 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl px-3 py-1.5"
                >
                  <p className="font-semibold text-md">{hobby.title}</p>
                  <span className="text-xl">{hobby.image}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
