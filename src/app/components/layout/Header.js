"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const pathname = usePathname();
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const isActive = (path) => pathname === path;

  return (
    <header className="flex px-2 py-6 items-center justify-between">
      <Link href="/">
        <Image src="/logo.png" width={40} height={40} alt='JAYS' />
      </Link>
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
            <Link href={'/'} className={`text-amber-200 ${isActive('/') ? 'font-bold' : ''}`}>Home</Link>
            <Link href={'/menu'} className={`text-amber-200 ${isActive('/menu') ? 'font-bold' : ''}`}>Menu</Link>
            <Link href={'/about'} className={`text-amber-200 ${isActive('/about') ? 'font-bold' : ''}`}>About</Link>
            <Link href={'/contact'} className={`text-amber-200 ${isActive('/contact') ? 'font-bold' : ''}`}>Contact</Link>
          </nav>

          <nav className="hidden sm:flex items-center gap-6 text-gray-600 font-semibold">
            <Link href={'/'} className={`text-amber-200 ${isActive('/') ? 'font-bold' : ''}`}>Home</Link>
            <Link href={'/menu'} className={`text-amber-200 ${isActive('/menu') ? 'font-bold' : ''}`}>Menu</Link>
            <Link href={'/about'} className={`text-amber-200 ${isActive('/about') ? 'font-bold' : ''}`}>About</Link>
            <Link href={'/contact'} className={`text-amber-200 ${isActive('/contact') ? 'font-bold' : ''}`}>Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
