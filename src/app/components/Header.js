"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { usePathname } from 'next/navigation';
import Notification from './notification';

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
      <div className="fixed top-0 left-0 w-full z-50 flex px-4 lg:px-20  py-2 lg:py-6 mb-8 items-center justify-between bg-[#EAC6B5]"> {/* Added fixed classes */}
        <Link href="/">
          <Image src="/images/olivialogo.jpg" width={30} height={30} alt='OLIVIAS' className='rounded-full'/>
        </Link>
        
        <div className="text-black whitespace-nowrap animate-marquee">
          <span className="text-xxs"><Notification /></span>
        </div>
        
        <div className="relative">
          <div className="relative">
            <button onClick={toggleNav} className="block sm:hidden">
              <GiHamburgerMenu className='text-black text-3xl' />
            </button>

            <div
              className={`fixed inset-0 bg-gray bg-opacity-75 z-10 transition-opacity duration-300 ${isNavVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              onClick={toggleNav}
            ></div>

            <div
              className={`fixed top-0 right-0 h-1/2 w-2/5 bg-[#EAC6B5] text-white transform transition-transform duration-300 z-20 ${isNavVisible ? 'translate-x-0' : 'translate-x-full'
                } sm:hidden flex flex-col items-start p-6 gap-6`}
            >
              <button onClick={toggleNav} className="text-black self-end mb-4 text-lg bold">
              <ImCross />
              </button>
              <Link href={'/'} className={`text-[#EAC6B5]  p-2 rounded-md transition-colors duration-300 ${isActive('/') ? 'bg-black text-[#EAC6B5]' : 'text-black'}`} onClick={() => handleLinkClick('/')}>
                Home
              </Link>
              <Link href={'/menu'} className={`text-[#EAC6B5] p-2 rounded-md transition-colors duration-300 ${isActive('/menu') ? 'bg-black text-[#EAC6B5]' : 'text-black'}`} onClick={() => handleLinkClick('/menu')}>
                Menu
              </Link>
              <Link href={'/about'} className={`text-[#EAC6B5]  p-2 rounded-md transition-colors duration-300 ${isActive('/about') ? 'bg-black text-[#EAC6B5]': 'text-black'}`} onClick={() => handleLinkClick('/about')}>
                About
              </Link>
              <Link href={'/contact'} className={`text-[#EAC6B5]  p-2 rounded-md transition-colors duration-300 ${isActive('/contact') ? 'bg-black text-[#EAC6B5]' : 'text-black'}`} onClick={() => handleLinkClick('/contact')}>
                Contact
              </Link>
            </div>

            <div className="hidden sm:flex items-center gap-6 font-semibold">
              <Link href={'/'} className={`text-[#EAC6B5]  p-2 rounded-md transition-colors duration-300 ${isActive('/') ? 'bg-black text-[#EAC6B5]' : 'text-black'}`}>
                Home
              </Link>
              <Link href={'/menu'} className={`text-[#EAC6B5]  p-2 rounded-md transition-colors duration-300 ${isActive('/menu') ? 'bg-black text-[#EAC6B5]' : 'text-black'}`}>
                Menu
              </Link>
              <Link href={'/about'} className={`text-[#EAC6B5] p-2 rounded-md transition-colors duration-300 ${isActive('/about') ? 'bg-black text-[#EAC6B5]' : 'text-black'}`}>
                About
              </Link>
              <Link href={'/contact'} className={`text-[#EAC6B5]  p-2 rounded-md transition-colors duration-300 ${isActive('/contact') ? 'bg-black text-[#EAC6B5]' : 'text-black'}`}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
