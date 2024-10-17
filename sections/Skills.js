import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import React, { Fragment } from "react";
import ReactIcon from "@/assets/icons/react.svg";
import Css3Icon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import SkillsIcons from "@/components/SkillsIcons";
import StarIcon from "@/assets/icons/star.svg";

const Skills = () => {
  const ToolsIcons = [
    {
      name: "React",
      icon: ReactIcon,
    },
    {
      name: "Javascript",
      icon: JavascriptIcon,
    },
    {
      name: "Css",
      icon: Css3Icon,
    },
    {
      name: "Github",
      icon: GithubIcon,
    },
    {
      name: "Html",
      icon: HtmlIcon,
    },
    {
      name: "Chrome",
      icon: ChromeIcon,
    },
  ];
  return (
    <div id="skills" className="pb-96">
      <SectionHeader
        eyebrow="Skills"
        title="My Skills"
        description="Find out what I've been working with and what I'm currently learning"
      />

      <div className="masked-div2 w-full max-w-6xl mx-auto overflow-hidden mt-10">
        <div className="masked-div2 relative pt-5 space-x-4 overflow-hidden inline-flex">
          {[...new Array(2)]
            .fill(0)
            .map((_, i) => (
              <Fragment key={i}>
                {ToolsIcons.map((icon) => (
                  <div
                    key={icon.name}
                    className="animate-move-left inline-flex justify-center items-center w-[180px] gap-4 py-1.5 border border-white/15 rounded-lg"
                  >
                    <span>
                      <SkillsIcons
                        className="size-10 text-purple-300"
                        component={icon.icon}
                      />
                    </span>
                    <span>{icon.name}</span>
                  </div>
                ))}
              </Fragment>
            ))}
        </div>
        <div className="masked-div2 relative pt-5 gap-4 overflow-hidden inline-flex mt-2">
          {[...new Array(2)]
            .fill(0)
            .map((_, i) => (
              <Fragment key={i}>
                {ToolsIcons.map((icon) => (
                  <div
                    key={icon.name}
                    className="animate-move-right inline-flex justify-center items-center w-[180px] gap-4 py-1.5 border border-white/15 rounded-lg"
                  >
                    <span>
                      <SkillsIcons
                        className="size-10 text-purple-300"
                        component={icon.icon}
                      />
                    </span>
                    <span>{icon.name}</span>
                  </div>
                ))}
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
