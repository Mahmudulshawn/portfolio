"use client";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import React, { useRef } from "react";
import profile from "@/assets/images/profile.jpg";
import Card from "@/components/Card";
import BookImage from "@/assets/images/book-cover.png";
import { motion } from "framer-motion";
import map from "@/assets/images/map.png";

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
    {
      title: "Movies",
      image: "🎥",
      left: "75%",
      top: "25%",
    },
    {
      title: "Writing",
      image: "📝",
      left: "25%",
      top: "25%",
    },
    {
      title: "Sports",
      image: "⚽",
      left: "75%",
      top: "50%",
    },
  ];
  return (
    <div id="about" className="pb-16 px-3">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do and what inspires me."
      />

      <div className=" max-w-5xl mt-20 mx-auto">
        <div className="about-card max-w-5xl mx-auto mb-4">
          <Card className={`bg-[#1E1D1C]/20 px-6`}>
            <div className="intro flex max-md:flex-col-reverse items-center justify-center gap-12 md:28 py-6 ">
              <div className="max-w-md flex max-md:items-center flex-col">
                <h1 className="text-3xl font-medium font-serif ">
                  Mahmudul Alam Shawn
                </h1>
                <span className="text-white/50 text-sm pb-4">
                  A Passionate Software Developer
                </span>
                <p className="text-white/50 text-center md:text-start">
                  I excel in architecting scalable, responsive web applications
                  with a focus on performance, precision, and modern design. My
                  expertise bridges the gap between aesthetic appeal and
                  cutting-edge functionality, delivering seamless digital
                  experiences.
                </p>
              </div>
              <div className="relative flex justify-center items-center w-full">
                <div className="absolute bg-purple-900/50 rounded-full blur-3xl h-[300px] w-[300px] md:h-[300px] md:w-[300px] -z-10 left-50% top-50% -translate-x-50% -translate-y-50% "></div>
                <div className="rounded-full ">
                  <Image
                    src={profile}
                    height={200}
                    width={200}
                    className="rounded-full"
                    alt="profile picture"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid-about grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="book-card">
            <Card className={`max-h-[320px]`}>
              <div className="py-5">
                <h1 className="text-3xl font-serif font-medium text-center">
                  My Reads
                </h1>
                <p className="text-white/50 text-center ">
                  Explore the books shaping my perspectives.
                </p>
              </div>
              <div className="max-w-40 mx-auto px-2">
                <Image src={BookImage} alt="book image" />
              </div>
            </Card>
          </div>

          <div className="map-card">
            <Card className={`max-h-[320px]`}>
              <div className="">
                <Image src={map} content="cover" alt="map" className="rounded-xl"/>
              </div>
            </Card>
          </div>

          <div className="hobbies-card md:col-span-2">
            <Card className={``}>
              <div className="py-4 px-6">
                <h1 className="text-3xl font-serif font-medium text-center">
                  My Hobbies
                </h1>
                <p className="text-white/50 text-center ">
                  Explore my interests and hobbies beyond the digital realm.
                </p>
              </div>
              <div ref={dragRef} className="relative flex-1 w-full min-h-[250px]">
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
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span className="text-xl">{hobby.image}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
