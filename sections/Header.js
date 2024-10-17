"use client"
import Link from 'next/link'
import React from 'react'
import logo from "@/assets/logo/MS.png"
import Image from 'next/image'

export const handleLinkClick = (e, href) => {
  e.preventDefault();
  const targetElement = document.querySelector(href);
  if (targetElement) {
    const offset = -85;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior:"smooth",
    });
  }
};
const Header = () => {
  return (
    <div className='flex justify-center items-center fixed w-full z-10 top-3 '>
        <nav className='flex gap-1 p-0.5 bg-black/60 backdrop-blur rounded-full border border-white/15'>
            <Link href={`#home`} onClick={e => handleLinkClick(e, "#home")} className='nav-item bg-white/10 text-gray-900 hover:bg-white/20'>
            <Image src={logo} height={30} width={30} alt='logo'/>
            </Link>
            <Link href={`#projects`} onClick={e => handleLinkClick(e, "#projects")} className='nav-item'>Projects</Link>
            <Link href={`#skills`} onClick={e => handleLinkClick(e, "#skills")} className='nav-item'>Skills</Link>
            <Link href={`#about`} onClick={e => handleLinkClick(e, "#about")} className='nav-item'>About</Link>
            <Link href={`#contact`} onClick={e => handleLinkClick(e, "#contact")} className='nav-item'>Contact</Link>
        </nav>
    </div>
  )
}

export default Header;