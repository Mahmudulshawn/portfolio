import Link from 'next/link'
import React from 'react'
import logo from "@/assets/logo/MS.png"
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex justify-center items-center fixed w-full z-10 top-3 '>
        <nav className='flex gap-1 p-0.5 bg-white/10 backdrop-blur rounded-full border border-white/15'>
            <Link href={`#`} className='nav-item bg-white/10 text-gray-900 hover:bg-white/20'>
            <Image src={logo} height={30} width={30} alt='logo'/>
            </Link>
            <Link href={`#`} className='nav-item'>Projects</Link>
            <Link href={`#`} className='nav-item'>About</Link>
            <Link href={`#`} className='nav-item'>Contact</Link>
        </nav>
    </div>
  )
}

export default Header;