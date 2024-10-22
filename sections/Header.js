"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/assets/logo/MS.png";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

export const handleLinkClick = (e, href) => {
  e.preventDefault();
  const targetElement = document.querySelector(href);
  if (targetElement) {
    const offset = -85;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-center items-center fixed w-full z-10 top-3 px-3">
      <nav className="hidden sm:flex gap-1 p-0.5 bg-black/60 backdrop-blur rounded-full border border-white/15">
        <Link
          href={`#home`}
          onClick={(e) => handleLinkClick(e, "#home")}
          className="nav-item bg-white/10 text-gray-900 hover:bg-white/20"
        >
          <Image src={Logo} height={30} width={30} alt="logo" />
        </Link>
        <Link
          href={`#projects`}
          onClick={(e) => handleLinkClick(e, "#projects")}
          className="nav-item"
        >
          Projects
        </Link>
        <Link
          href={`#skills`}
          onClick={(e) => handleLinkClick(e, "#skills")}
          className="nav-item"
        >
          Skills
        </Link>
        <Link
          href={`#about`}
          onClick={(e) => handleLinkClick(e, "#about")}
          className="nav-item"
        >
          About
        </Link>
        <Link
          href={`#contact`}
          onClick={(e) => handleLinkClick(e, "#contact")}
          className="nav-item"
        >
          Contact
        </Link>
      </nav>

      {/* mobile navbar */}
      <div className="rounded-lg px-6 sm:hidden w-full max-w-3xl gap-1 p-0.5 bg-black/60 backdrop-blur border border-white/15">
        <div className="flex items-center justify-between">
          <div>
            <Link
              href={`#home`}
              onClick={(e) => handleLinkClick(e, "#home")}
              className="bg-white/10 text-gray-900 hover:bg-white/20"
            >
              <Image src={Logo} height={30} width={30} alt="logo" />
            </Link>
          </div>
          <div className="flex items-center">
            <button
              className="focus:outline-none lg-hidden"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <FaTimes className="m-2 h-6 w-5" />
              ) : (
                <FaBars className="m-2 h-6 w-5" />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <ul className="flex flex-col gap-4 pb-2">
            <Link
              href={`#projects`}
              onClick={(e) => handleLinkClick(e, "#projects")}
              className="text-sm font-semibold text-white/70 transition duration-300 py-1.5 "
            >
              Projects
            </Link>
            <Link
              href={`#skills`}
              onClick={(e) => handleLinkClick(e, "#skills")}
              className="text-sm font-semibold text-white/70 transition duration-300 py-1.5 "
            >
              Skills
            </Link>
            <Link
              href={`#about`}
              onClick={(e) => handleLinkClick(e, "#about")}
              className="text-sm font-semibold text-white/70 transition duration-300 py-1.5 "
            >
              About
            </Link>
            <Link
              href={`#contact`}
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="text-sm font-semibold text-white/70 transition duration-300 py-1.5 "
            >
              Contact
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
