import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import React from "react";
import ReactIcon from "@/assets/icons/react.svg";
import Css3Icon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import SkillsIcons from "@/components/SkillsIcons";

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

      <div>
        <Card>
          <div>My Toolbox</div>
          <p>
            Explore the technologies and tools i use to craft exceptional
            digital experiences.
          </p>
          <div>
            {ToolsIcons.map((icon) => (
              <div key={icon.name} className="">
                <span>
                  <SkillsIcons className="size-10" component={icon.icon} />
                </span>
                <span>{icon.name}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
