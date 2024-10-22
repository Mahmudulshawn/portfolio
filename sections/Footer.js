import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  const footerIcons = [
    {
      icon: <AiFillGithub />,
      link: "https://github.com/Mahmudulshawn",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/mahmudul-shawn-2071b22ab/",
    },
    {
      icon: <FaInstagram />,
      link: "URL_ADDRESS",
    },
    {
      icon: <FaFacebook />,
      link: "https://web.facebook.com/profile.php?id=100016497733907",
    },
  ];
  return (
    <footer className="relative overflow-x-clip mt-10">
      <div className="absolute bg-purple-400/30 [mask-image:radial-gradient(60%_60%_at_bottom_center,black,transparent)] h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 -z-20"></div>
      <div className="px-3">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div>&copy; 2024. All rights reserved.</div>
          <div className="flex flex-row items-center gap-4">
            {footerIcons.map((icon, index) => (
              <div key={index}>
                <a href={icon.link} target="_blank" className="text-3xl">
                  {icon.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
