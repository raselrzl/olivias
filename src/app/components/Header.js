"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const pathname = usePathname();

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const isActive = (path) => pathname === path || activeLink === path;

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsNavVisible(false); // Close the drawer on link click
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex px-4 lg:px-20  py-2 lg:py-6 mb-8 items-center justify-between bg-black"> {/* Added fixed classes */}
        <Link href="/">
          <Image src="/images/logo.png" width={40} height={40} alt='JAYS' />
        </Link>
        
        <div className="text-amber-100 whitespace-nowrap animate-marquee">
          <span className="text-xxs">Today 10% Deals! </span>
        </div>
        
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

            <div
              className={`fixed top-0 right-0 h-1/2 w-2/5 bg-gray-900 text-white transform transition-transform duration-300 z-20 ${isNavVisible ? 'translate-x-0' : 'translate-x-full'
                } sm:hidden flex flex-col items-start p-6 gap-6`}
            >
              <button onClick={toggleNav} className="text-primary self-end mb-4 text-lg bold">
              <ImCross />
              </button>
              <Link href={'/'} className={`text-amber-200 p-2 rounded-md transition-colors duration-300 ${isActive('/') ? 'bg-primary text-white' : ''}`} onClick={() => handleLinkClick('/')}>
                Home
              </Link>
              <Link href={'/menu'} className={`text-amber-200 p-2 rounded-md transition-colors duration-300 ${isActive('/menu') ? 'bg-primary text-white' : ''}`} onClick={() => handleLinkClick('/menu')}>
                Menu
              </Link>
              <Link href={'/about'} className={`text-amber-200 p-2 rounded-md transition-colors duration-300 ${isActive('/about') ? 'bg-primary text-white' : ''}`} onClick={() => handleLinkClick('/about')}>
                About
              </Link>
              <Link href={'/contact'} className={`text-amber-200 p-2 rounded-md transition-colors duration-300 ${isActive('/contact') ? 'bg-primary text-white' : ''}`} onClick={() => handleLinkClick('/contact')}>
                Contact
              </Link>
            </div>

            <div className="hidden sm:flex items-center gap-6 text-gray-600 font-semibold">
              <Link href={'/'} className={`text-amber-200 p-2 rounded-md transition-colors duration-300 ${isActive('/') ? 'bg-primary text-white' : ''}`}>
                Home
              </Link>
              <Link href={'/menu'} className={`text-amber-200 p-2 rounded-md transition-colors duration-300 ${isActive('/menu') ? 'bg-primary text-white' : ''}`}>
                Menu
              </Link>
              <Link href={'/about'} className={`text-amber-200 p-2 rounded-md transition-colors duration-300 ${isActive('/about') ? 'bg-primary text-white' : ''}`}>
                About
              </Link>
              <Link href={'/contact'} className={`text-amber-200 p-2 rounded-md transition-colors duration-300 ${isActive('/contact') ? 'bg-primary text-white' : ''}`}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
