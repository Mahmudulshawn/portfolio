import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center items-center fixed w-full z-10 top-3 '>
        <nav className='flex gap-1 p-0.5 bg-white/10 backdrop-blur rounded-full border border-white/15'>
            <Link href={`#`} className='nav-item bg-white text-gray-900 hover:bg-white/70'>Home</Link>
            <Link href={`#`} className='nav-item'>Projects</Link>
            <Link href={`#`} className='nav-item'>About</Link>
            <Link href={`#`} className='nav-item'>Contact</Link>
        </nav>
    </div>
  )
}

export default Header;