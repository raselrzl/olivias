"use client";

import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <header className="flex px-12 py-6 items-center justify-between">
      <Link href="/">
        <Image src="/logo.png" width={40} height={40} alt='JAYS' />
      </Link>
     {/*  <Link href={'/'} className="font-black text-amber-200 text-xl ">Welcome to JAY'S</Link> */}
      <div className="relative">
        <div className="relative">
          <button onClick={toggleNav} className="block sm:hidden">
            <GiHamburgerMenu className='text-amber-100 text-3xl' />
          </button>

          <div
            className={`fixed inset-0 bg-gray bg-opacity-75 z-10 transition-opacity duration-300 ${isNavVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            onClick={toggleNav}
          ></div>

          <nav
            className={`fixed top-0 right-0 h-1.2/2 w-2/5 bg-gray-900 text-white transform transition-transform duration-300 z-20 ${isNavVisible ? 'translate-x-0' : 'translate-x-full'
              } sm:hidden flex flex-col items-start p-6 gap-6`}
          >
            <button onClick={toggleNav} className="self-end mb-4 text-xl">
              ✕
            </button>
            <Link href={'/'} className="text-amber-200">Home</Link>
            <Link href={'/menu'} className="text-amber-200">Menu</Link>
            <Link href={'/about'} className="text-amber-200">About</Link>
            <Link href={'/contact'} className="text-amber-200">Contact</Link>
          </nav>

          <nav className="hidden sm:flex items-center gap-6 text-gray-600 font-semibold">
            <Link href={'/'} className="text-amber-200">Home</Link>
            <Link href={'/menu'} className="text-amber-200">Menu</Link>
            <Link href={'/about'} className="text-amber-200">About</Link>
            <Link href={'/contact'} className="text-amber-200">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}